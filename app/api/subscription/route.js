import Subscription from "@/app/models/Subscription";
import dbConnect from "@/app/utils/dbConnect"
// import Subscription from '@app/models/Subscription'
dbConnect();

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const sub = await Subscription.find().sort({ timeStamp: -1 });

  return NextResponse.json({ data: sub }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  try {
    const body = await request.json();
    const sub = await Subscription.create(body);

    return NextResponse.json({ data: sub }, { status: 200 });
  } catch (error) {
    console.log("errror>>>>", error.message);
    return NextResponse.json({ error: error.message }, { status: 200 });
  }
}
