import dbConnect from "@/app/utils/dbConnect";
import Blog from "@/app/models/Blog";
 
dbConnect();

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  
  const blog = await Blog.find().sort({ createdAt: -1 });

  return NextResponse.json({ data: blog }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  try {
    const body = await request.json();
    const blog = await Blog.create(body);

    return NextResponse.json({ data: blog }, { status: 200 });
  } catch (error) {
    console.log("errror>>>>", error );
    return NextResponse.json({ error: error  }, { status: 200 });
  }
}
