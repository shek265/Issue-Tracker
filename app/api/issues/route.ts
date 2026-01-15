import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createIssueSchema } from "../../ValidationSchemas";

export async function POST(request: NextRequest){
    const respone = await request.json();
    const validation = createIssueSchema.safeParse(respone);

    if(!validation.success){
        return NextResponse.json(validation.error.format(),{status:400})
    }

    const createdIssue = await prisma.issue.create({
        data:{
            title: respone.title, description: respone.description
        }
    });

    return NextResponse.json(createdIssue,{status: 201});

}