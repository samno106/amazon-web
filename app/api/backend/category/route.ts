import { prisma } from "@/lib/prisma.db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, slug, parentId } = body;

    const category = await prisma.category.create({
      data: {
        name,
        slug,
        parentId: parentId ? parentId : null,
      },
    });

    return NextResponse.json(
      {
        category: category,
        message: "Please check your email",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error!",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();

    const { id } = body;

    const category = await prisma.category.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      {
        message: "Category was deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error!",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const categories = await prisma.category.findMany({
      include: {
        parent: true,
      },
    });

    return NextResponse.json(
      {
        categories: categories,
        message: "Get data success",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error!",
      },
      { status: 500 }
    );
  }
}
