import { prisma } from "@/lib/prisma.db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // check email already exists
    const exittingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (exittingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    const { password: newUserPassword, ...res } = newUser;

    return NextResponse.json(
      {
        user: res,
        message: "User register success",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Somthing went wrong!",
      },
      { status: 500 }
    );
  }
}
