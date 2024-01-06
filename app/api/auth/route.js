import Auth from "@/app/models/Auth";
import dbConnect from "@/app/utils/dbConnect";

dbConnect();

import { NextResponse } from "next/server";
 

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const auth = await Auth.find();

  return NextResponse.json({ data: auth }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  try {
    const body = await request.json();
    const auth = await Auth.create(body);

    return NextResponse.json({ data: auth }, { status: 200 });
  } catch (error) {
   
    return NextResponse.json({ error: error.message }, { status: 200 });
  }
}


 