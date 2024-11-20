"use server";
import { Connect } from "@/lib/database";
import { cart } from "@/lib/database";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { Decrypt } from "@/lib/actions";
export async function GET() {
  await Connect();
  const carts = await cart.findOne();
  const cartProducts = carts.cart.Items.products;
  if (!carts) {
    return NextResponse.json({ message: "error fetching cart items" });
  }
  return NextResponse.json({ cartProducts: cartProducts });
}