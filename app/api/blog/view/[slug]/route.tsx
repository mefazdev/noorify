import dbConnect from "@/app/utils/dbConnect";
import Blog from "@/app/models/Blog";

dbConnect();

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
 
  const blog = await Blog.find({slug:slug});

  return NextResponse.json({ data: blog }, { status: 200 });
}

// To handle a POST request to /api
