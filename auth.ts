import { compare } from 'bcryptjs';
import  CredentialsProvider  from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma.db";


export const { handlers: {GET,POST}, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session:{
      strategy:"jwt"
  },
  pages:{
    signIn:"/sign-in"
  },
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
      name:"Credentails",
      credentials:{
        email:{
          label:"Email", type:"email", placeholder:""
        },
        password:{
          label:"Password", type:"password"
        }
      },
      async authorize(credentials) {
          if(!credentials?.email || !credentials?.password){
            return null;
          }
          const existingUser = await prisma.user.findUnique({
            where: { email: `${credentials.email}` },
          });

          if(!existingUser){
            return null;
          }

          const passwordMatch = await compare(`${credentials?.password}`, `${existingUser.password}`);

          if(!passwordMatch){
            return null;
          }

          return {
            id:existingUser.id,
            name:existingUser.name,
            email:existingUser.email
          }
      },
    })
 
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
    async jwt({token, user, account, profile, isNewUser}){
      if(user){
        return {...token, name:user.name}
      }
      return token;
    },
    async session({session, token}){
      return{
        ...session, 
        user:{
          ...session.user,
          name: token.name
        }
      }
   
    }
  }
});

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

// export const {
//     handlers: { GET, POST },
//     auth,
//     signIn,
//     signOut,
// } = NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             authorization: {
//                 params: {
//                     prompt: "consent",
//                     access_type: "offline",
//                     response_type: "code",
//                 },
//             },
//         }),
//         GitHubProvider({
//           clientId: process.env.GITHUB_ID,
//           clientSecret: process.env.GITHUB_SECRET,
//           authorization: {
//             params: {
//                 prompt: "consent",
//                 access_type: "offline",
//                 response_type: "code",
//             },
//         },
//         })
//     ],
//     secret: process.env.NEXTAUTH_SECRET,
// });