import dbConnect from "@/app/utils/dbConnect";
import Blog from "@/app/models/Blog";

dbConnect();

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: Request) {
  const blog = await Blog.find({'isPublished':true}).sort({ publishedAt: -1 });

  return NextResponse.json({ data: blog }, { status: 200 });
}
