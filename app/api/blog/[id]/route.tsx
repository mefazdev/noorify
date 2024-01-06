import dbConnect from "@/app/utils/dbConnect";
import Blog from "@/app/models/Blog";

dbConnect();

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const _id = params.id;

  const blog = await Blog.findById(_id);

  return NextResponse.json({ data: blog }, { status: 200 });
}

// To handle a POST request to /api
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const _id = params.id;

    const updateBlog = await Blog.findByIdAndUpdate(
      _id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updateBlog) {
      console.log("not workingg");
      return NextResponse.json({ data: "Not Updated" }, { status: 400 });
    }

    return NextResponse.json({ data: updateBlog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 200 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: object } }
) {
  try {
    const _id = await params.id;
    const delBlog = await Blog.findByIdAndDelete(_id);
    if (!delBlog) {
      return NextResponse.json({ data: "Not Deleted" }, { status: 400 });
    }
    return NextResponse.json({ data: "Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 200 });
  }
}
