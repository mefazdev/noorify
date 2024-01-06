import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

export async function GET() {
  const adminIn = cookies().get("adminUser")
  if (adminIn?.value === "true") {
      return NextResponse.json({message: "Welcome back!"})
  }
  return NextResponse.json({message: "Welcome!"})
}



export async function POST(request) {
    try {
        const body = await request.json();
        const { username, password,serverUsername,serverPassword } = body;
        const isAuthenticated = await authenticateAdmin(username, password,serverUsername,serverPassword);
       
        if(isAuthenticated){
          const response = NextResponse.json({message: "Welcome!"})
          response.cookies.set("adminUser", "true")
          return response
        }
      } catch (error) {
        console.log(error)
    }
   
}


async function authenticateAdmin(username, password,serverUsername,serverPassword) {
 
  if (
    username === serverUsername &&
    password === serverPassword
  ) {
    return true;
  }
}
