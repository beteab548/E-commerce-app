import { Connect, User } from "@/lib/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();
  await Connect();
  try {
    const ExistingUser = User.findOne({ email: formData.email });
    console.log(ExistingUser);
    if (!ExistingUser == null) {
      return NextResponse.json({ message: "email already exists" });
    }
    //update the db request with hashed password 
    User.create({ email: formData.email, password: formData.password });
    //redirect to the login page
  } catch (err) {
    console.log(err);
  }
}
