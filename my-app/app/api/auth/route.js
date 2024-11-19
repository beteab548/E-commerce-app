"use server";
import { Decrypt } from "@/lib/actions";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  //here get check if the session is valid and return true if valid or false if invalid
  //   const session = (await cookies()).get("session");
  //   console.log(session.value);
  //   const session = (await cookies()).get("session");
  //   console.log(session.value);
  //   if (!session) {
  return NextResponse.json({ message: " session" });
  //   }
  //   //   const payload = Decrypt(session);
  //   return NextResponse.json({ message: "invalid session" });
  //   console.log(payload);
}
