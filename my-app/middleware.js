"use server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

export default async function middleware(req) {
  // const privateRoutes = [
  //   "/account/register",
  //   "/account/reset-password",
  //   "/account/password-resetting",
  // ];
  // // const publicRoutes = [];
  // const sessionCookie = (await cookies()).get("session");

  // if (!sessionCookie) {
  //   console.log("in the right code");
  //   return NextResponse.redirect("http://localhost:3000");
  // } else {
  //   try {
  //     const { payload } = await jwtVerify(sessionCookie.value, secretKey, {
  //       algorithms: ["HS256"],
  //     });
  //     console.log("Payload:", payload);
  //     if (payload) {
  //     }
  //     if (privateRoutes.includes(req.nextUrl.pathname)) {
  //       console.log("private route");
  //       return NextResponse.redirect("http://localhost:3000");
  //     }
  //   } catch (err) {
  //     console.error("JWT Verification Failed:", err);
  //     return NextResponse.redirect("http://localhost:3000/"); // Redirect on verification failure
  //   }
  //   return NextResponse.next();
  // }
}
