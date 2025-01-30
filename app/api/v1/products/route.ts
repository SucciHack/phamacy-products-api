import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

//POST METHOD
export async function POST(request:NextRequest){
    const data = await request.json()
    try {
        const createdProduct = await db.products.create({
            data
        })
        return NextResponse.json({
            data:createdProduct,
            message: "created",
            error: null
        },{
            status: 201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error: "something went wrong"
        })
    }
}

//GET METHOD
export async function GET() {
   try {
        const data = await db.products.findMany()
        return NextResponse.json({
            data,
            message: "fetched",
            error:null
        },{
            status:200
        })
   } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            message:"failed to fetch"
        })
   }
}