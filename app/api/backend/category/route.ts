import { prisma } from "@/lib/prisma.db";
import { NextResponse } from "next/server";

export async function POST(req:Request) {

    try {
        
        const body = await req.json();
        const {name, slug} = body;
    
        const category = await prisma.category.create({
            data:{
                name,
                slug
            }
        })

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


export async function GET(req:Request) {
    try {
        
        const categories = await prisma.category.findMany();

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