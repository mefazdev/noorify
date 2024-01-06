import Contact from "@/app/models/Contact";
import dbConnect from "@/app/utils/dbConnect";

 
dbConnect();

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const contacts = await Contact.find().sort({ timeStamp: -1 });

  return NextResponse.json({ data: contacts }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  try {
    const body = await request.json();
    const contacts = await Contact.create(body);

    return NextResponse.json({ data: contacts }, { status: 200 });
  } catch (error) {
    console.log("errror>>>>", error.message);
    return NextResponse.json({ error: error.message }, { status: 200 });
  }
}
