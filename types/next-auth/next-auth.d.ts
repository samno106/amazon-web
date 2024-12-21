// import NextAuth from "next-auth";

// declare module "next-auth" {
//   interface User {
//     name: string;
//   }
//   interface Session {
//     user: User & {
//       name: string;
//     };
//     token: {
//       name: string;
//     };
//   }
// }

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    role: string;
    name: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    name: string;
  }
}
