import { NextResponse, NextRequest } from "next/server";


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true
        });

        response.cookies.set("token", "", {
            httpOnly: true, expires: new Date(0)
        });

        return response;

    } catch (error: any) {
        console.error(error);
        return NextResponse.json({
            error: error.message
        },
            { status: 500 })
    }
}