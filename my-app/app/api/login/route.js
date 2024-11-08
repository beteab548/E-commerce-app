import { NextResponse } from "next/server";
import { Connect } from "@/lib/database";
import { User } from "@/lib/database";
export async function POST(req) {
  const body = await req.json();
  console.log(body);
  await Connect();
  try {
    //find if email already exisits in the database
   const userFound=await  User.findOne({
      email: body.email,
      password: body.password,
    });
    if(!userFound){
    return  NextResponse.json({message:'no user found with this Email Address!'})
    }
    //here generate webtoken and send it back 
  } catch (err) {
    console.log(err);
  }
  console.log("login enpoint reached");
  return NextResponse.json({ message: "logged in" });
}
