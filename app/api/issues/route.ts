import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod';

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})


export async function POST(request: NextRequest){
    const respone = await request.json();
    const validation = createIssueSchema.safeParse(respone);

    if(!validation.success){
        return NextResponse.json(validation.error,{status:400})
    }

    const createdIssue = await prisma.issue.create({
        data:{
            title: respone.title, description: respone.description
        }
    });

    return NextResponse.json(createdIssue,{status: 201});

}