import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function GET(request: NextRequest, response: NextResponse) {
    try {
        const userId = await getDataFromToken(request);

        const user = await User.findOne({ _id : userId}).select("-password");

        return NextResponse.json({
            message: "User found",
            success: true,
            data : user
        });


    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        },
            { status: 500 })
    }
}