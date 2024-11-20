import { Connect, User } from "@/lib/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("in the register api endpoint");
  const formData = await req.json();
  await Connect();
  try {
    const ExistingUser = await User.findOne({ email: formData.email });
    if (ExistingUser !== null) {
      return NextResponse.json({ message: "email already exists" });
    }
    //update the db request with hashed password
    await User.create({ email: formData.email, password: formData.password });
    console.log("here");
    return NextResponse.json({ message: "user created" }); //redirect to the login page
  } catch (err) {
    console.log(err);
    NextResponse.json({ message: "error occured registering user!" });
  }
}
