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
    return NextResponse.redirect(new URL("/", request.url));
  }

});
export const config = { matcher: ["/dashboard", "/dashboard/:path*"] };
