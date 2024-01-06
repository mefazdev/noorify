import dbConnect from "@/app/utils/dbConnect";

import Feedback from "../../models/Feedback";
dbConnect();

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const feedbacks = await Feedback.find().sort({ timeStamp: -1 });

  return NextResponse.json({ data: feedbacks }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  try {
    const body = await request.json();
    const feedbacks = await Feedback.create(body);

    return NextResponse.json({ data: feedbacks }, { status: 200 });
  } catch (error) {
    console.log("errror>>>>", error.message);
    return NextResponse.json({ error: error.message }, { status: 200 });
  }
}
