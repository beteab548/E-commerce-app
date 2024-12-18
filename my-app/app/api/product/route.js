"use server";
import {
  car,
  Connect,
  desktop,
  hoddie,
  house,
  jacket,
  laptop,
  pant,
  phone,
  shoe,
  tshirt,
} from "@/lib/database";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(req) {
  const reqData = await req.json();
  const ObjectId = new mongoose.Types.ObjectId(reqData.product_id);
  if (!ObjectId) {
    return NextResponse.json({ message: "error feching product data!!!" });
  }
  await Connect();
  const product_type = reqData.product_type;
  try {
    if (product_type === "jacket") {
      const fetchedProductDetail = await jacket.find({ _id: ObjectId });
      return NextResponse.json({ product_detail: fetchedProductDetail });
    } else if (product_type === "car") {
      const fetchedProductDetail = await car.find({ _id: ObjectId });
      return NextResponse.json({ product_detail: fetchedProductDetail });
    } else if (product_type === "pants") {
      const fetchedProductDetail = await pant.find({ _id: ObjectId });
      return NextResponse.json({ product_detail: fetchedProductDetail });
    } else if (product_type === "phone") {
      const fetchedProductDetail = await phone.find({ _id: ObjectId });
      return NextResponse.json({ product_detail: fetchedProductDetail });
    } else if (product_type === "desktop") {
      const fetchedProductDetail = await desktop.find({ _id: ObjectId });
      return NextResponse.json({ product_detail: fetchedProductDetail });
    } else if (product_type === "shoe") {
      const fetchedProductDetail = await shoe.find({ _id: ObjectId });
      return NextResponse.json({ product_detail: fetchedProductDetail });
    } else if (product_type === "house") {
      const fetchedProductDetail = await house.find({ _id: ObjectId });
      return NextResponse.json({ product_detail: fetchedProductDetail });
    } else if (product_type === "tshirt") {
      const fetchedProductDetail = await tshirt.find({ _id: ObjectId });
      return NextResponse.json({ product_detail: fetchedProductDetail });
    } else if (product_type === "hoddie") {
      const fetchedProductDetail = await hoddie.find({ _id: ObjectId });
      return NextResponse.json({ product_detail: fetchedProductDetail });
    } else if (product_type === "laptop") {
      const fetchedProductDetail = await laptop.find({ _id: ObjectId });
      return NextResponse.json({ product_detail: fetchedProductDetail });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error feching product data!!!" });
  }
  // console.log(reqData);
}
