import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

//GET SINGLE PRODUCT
export async function GET(request:NextRequest,{params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    try {
        const singleProduct = await db.products.findUnique({
            where:{
                id
            }
        })
        return NextResponse.json({
            data:singleProduct,
            message: "fetched",
            error: null
        },{
            status:200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"something went wrong"
        },{
            status:500
        })
    }
}

//DELETE PRODUCT
export async function DELETE(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const deletedProduct = await db.products.delete({
            where:{
                id
            }
        })
        return NextResponse.json({
            message:"deleted",
            error:null
        },{
            status:200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to delete"
        },{
            status:500
        })
    }
    
}

//UPDATE METHOD
export async function PUT(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const data = await request.json()
    try {
        const updatedProduct = await db.products.update({
            where:{
                id
            },
            data
        })
        return NextResponse.json({
            data:updatedProduct,
            message:"updated",
            error:null
        },{
            status:201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"failed to update"
        },{
            status:500
        }
        )
    }
}