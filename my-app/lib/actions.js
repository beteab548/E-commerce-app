"use server";
import { object, z } from "zod";
export async function Login(prevState, formdata) {
  const formSchema = z.object({
    email: z.string().email({ message: "invalid Email!" }).trim(),
    password: z
      .string()
      .min(8, { message: "password must be at least 8 characters long" })
      .trim(),
  });
  const formObject = Object.fromEntries(formdata);
  const result = formSchema.safeParse(formObject);
  console.log(result.error?.flatten().fieldErrors);
}
