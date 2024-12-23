import { prisma } from "@/lib/prisma.db";
import { NextResponse } from "next/server";

export async function GET(req:Request, {
    params,

}:{
    params:{slug:string};
}) {

    try {

        const category = await prisma.category.findUnique({
            where:{
                slug:`${params.slug}`
            }
        });

        return Response.json(
            {
                category: category,
                message: "Success get data",
              },
              { status: 200 }
        )
        
    } catch (error) {
        return NextResponse.json(
            {
              message: error,
            },
            { status: 500 }
          );
    }

}