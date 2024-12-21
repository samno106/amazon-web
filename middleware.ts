import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authConfig from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(request: NextRequest) {
  const session = await auth();

  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    session?.user?.role !== "ADMIN"
  ) {
    return NextResponse.rewrite(new URL("/403", request.url));
  }

  // console.log(session);
});
export const config = { matcher: ["/dashboard"] };
