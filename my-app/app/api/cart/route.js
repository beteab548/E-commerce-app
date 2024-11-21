"use server";
import { Connect } from "@/lib/database";
import { cart } from "@/lib/database";
import { NextResponse } from "next/server";
export async function GET() {
  await Connect();
  const carts = await cart.find();
  if (!carts) {
    return NextResponse.json({ message: "error fetching cart items" });
  }
  return NextResponse.json({ cartProducts: carts });
}
