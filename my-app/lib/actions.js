"use server";
import { object, z } from "zod";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const secretkey = process.env.SECRET_KEY;
const endcodedSecretKey = new TextEncoder().encode(secretkey);
export async function Login(prevState, formdata) {
  const dummyUser = {
    userId: "3443",
    email: "beteabbaynessagne548@gmail.com",
    password: "123456789",
  };
  const formSchema = z.object({
    email: z.string().email({ message: "invalid Email!" }).trim(),
    password: z
      .string()
      .min(8, { message: "password must be at least 8 characters long" })
      .trim(),
  });
  const formObject = Object.fromEntries(formdata);
  const result = formSchema.safeParse(formObject);
  if (result.error?.flatten().fieldErrors) {
    return {
      email: result.error?.flatten().fieldErrors.email,
      password: result.error?.flatten().fieldErrors.password,
    };
  }
  if (
    result.data.email === dummyUser.email &&
    result.data.password === dummyUser.password
  ) {
    await createSession(dummyUser.userId);
    //here write the code to store the login status in the redux store
    redirect("/shop/products");
  } else {
    return {
      error: "invalid email or password",
    };
  }
}
async function createSession(userId) {
  const expireDate = new Date(Date.now() * 7 * 24 * 60 * 60 * 1000);
  const session = await Ecrypt({ userId });
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
