import dbConnect from "@/app/utils/dbConnect";
// import Register from '@app/m'
import Register from '../../models/Register'
dbConnect()

import { NextResponse } from "next/server";
 

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const regsiters = await Register.find().sort({timeStamp:-1})
  
  return NextResponse.json({ data: regsiters }, { status: 200 });
//   try {
//     const members = await Member.find().sort({date:-1})
//     res.status(200).json({success:true,data:members})
    
// } catch (error) {
//     res.status(400).json({success:false, error:error.message})
//     console.log('message>>>>',error.message)
// }
}

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want

  // const register = await Register.create(request.body)
  // console.log(request.body)
  // return NextResponse.json({ data: register }, { status: 200 });
  const {body} = request;

    try {
      const body  = await request.json()
      const register = await Register.create(body)
          
 
      console.log(register)
 
 
    return NextResponse.json({ data: register }, { status: 200 });
} catch (error) {
   
    console.log('errror>>>>',error.message)
    return NextResponse.json({ error:error.message }, { status: 200 });
}
}
