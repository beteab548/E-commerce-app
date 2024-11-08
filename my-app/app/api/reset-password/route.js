import { Connect, User } from "@/lib/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();
  await Connect();
  const userExists = User.findOne({ email: formData.email });
  if (!userExists) {
    return NextResponse.json({ message: "invalid Email Entered" });
  }
  //send a link to that email that will reset the paswword
}
