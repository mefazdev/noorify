import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

export async function GET() {
   
    const response = NextResponse.json({message: "Suucefull signout"})
    response.cookies.set("adminUser", "false")
    return response
}



 


 