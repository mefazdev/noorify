import dbConnect from "@/app/utils/dbConnect";
import Blog from "@/app/models/Blog";

dbConnect();

import { NextResponse } from "next/server";
export const revalidate = 0; 
// To handle a GET request to /api
export async function GET(request: Request) {
  const blog = await Blog.find({status:'published'});

  return NextResponse.json({ data: blog }, { status: 200 });
}
