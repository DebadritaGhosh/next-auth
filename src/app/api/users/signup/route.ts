import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log(reqBody);

        const user = await User.findOne({ email: email });

        if (user) {
            return NextResponse.json({
                error: "User already exists"
            },
                { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "User created successfully",
            success: true
        },
            { status: 201 })

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        },
            { status: 500 })
    }
}