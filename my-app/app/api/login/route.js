import { NextResponse } from "next/server";
import { Connect } from "@/lib/database";
import { User } from "@/lib/database";
export async function POST(req) {
  const body = await req.json();
  await Connect();
  try {
    const newUser = await User.create({
      email: body.email,
      password: body.password,
    });
    return newUser;
  } catch (err) {
    console.log(err);
  }

  console.log("login enpoint reached");

  return NextResponse.json({ message: "logged in" });
}
