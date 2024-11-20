"use server";
import { object, z } from "zod";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cart, Connect, User } from "./database";
import mongoose from "mongoose";
const secretkey = process.env.SECRET_KEY;
const endcodedSecretKey = new TextEncoder().encode(secretkey);
export async function Login(prevState, formdata) {
  //retive real user from the data base here
  const formSchema = z.object({
    email: z.string().email({ message: "invalid Email!" }).trim(),
    password: z
      .string()
      .min(8, { message: "password must be at least 8 characters long" })
      .trim(),
  });
  const formObject = Object.fromEntries(formdata);
  const result = formSchema.safeParse(formObject);
  await Connect();
  const userFound = await User.findOne({
    email: result.data.email,
    password: result.data.password,
  });
  if (!userFound) {
    console.log("no user found wiht this credetials");
  }
  if (result.error?.flatten().fieldErrors) {
    return {
      email: result.error?.flatten().fieldErrors.email,
      password: result.error?.flatten().fieldErrors.password,
    };
  }
  if (
    result.data.email === userFound.email &&
    result.data.password === userFound.password
  ) {
    const userid = userFound._id.toString();
    await createSession(userid, userFound.email);
    //here write the code to store the login status in the redux store
    redirect("/shop/products");
  } else {
    return {
      error: "invalid email or password",
    };
  }
}
async function createSession(userId, email) {
  const expireDate = new Date(Date.now() * 7 * 24 * 60 * 60 * 1000);
  const session = await Ecrypt({ userId, email });
  try {
    (await cookies()).set("session", session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: expireDate,
      sameSite: "strict",
      path: "/",
    });
  } catch (err) {
    console.log(err);
  }
}
// async function destroySession(session) {
//   await cookies().delete(session);
// }
async function Ecrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .setIssuedAt()
    .sign(endcodedSecretKey); //might wanna use the textEndcoder to provide more salt to the secrete key
}
export async function Decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, endcodedSecretKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (err) {}
}
export async function cartAction(prodToAdd) {
  const newProdToAdd = Object.fromEntries(prodToAdd).productInfo;
  const cookie = (await cookies()).get("session");
  const { userId } = await Decrypt(cookie.value);
  const parsedProduct = JSON.parse(newProdToAdd);
  parsedProduct.id = new mongoose.Types.ObjectId(parsedProduct.id);
  const productToBeAdd = {
    userId: userId,
    cart: { Items: { products: parsedProduct } },
  };
  const cartExists = await cart.findOne({ userId: userId });
  if (!cartExists) {
    await cart.create(productToBeAdd);
    redirect("/shop/products");
  } else {
    //here check if the product to be added is also in teh cart and inceramt its quanity if exists if not push the nex product to the array
    console.log(cartExists);
  }
}
export async function register(formdata) {
  const formsData = Object.fromEntries(formdata);
  await fetch("http://localhost:3000/api/register", {
    method: "POST",
    body: JSON.stringify(formsData),
  });
}
