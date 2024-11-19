"use server";

import { cookies } from "next/headers";

export default async function middleware(req) {
  // console.log("in the middleware");
  // const session = (await cookies()).get("session");
  // console.log(session.value);
}
