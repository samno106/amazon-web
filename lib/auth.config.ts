import { prisma } from "./prisma.db";
import type { NextAuthConfig } from "next-auth";
import { compare } from "bcryptjs";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const existingUser = await prisma.user.findUnique({
          where: { email: `${credentials.email}` },
        });

        if (!existingUser) {
          return null;
        }

        const passwordMatch = await compare(
          `${credentials?.password}`,
          `${existingUser.password}`
        );

        if (!passwordMatch) {
          return null;
        }

        const user = {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          role: existingUser.role,
        } as any;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user?.role;
      // console.log(token);
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      // console.log(session);
      return session;
    },
  },
} satisfies NextAuthConfig;
