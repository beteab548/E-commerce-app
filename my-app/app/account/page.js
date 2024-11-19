"use server";
import { headers } from "next/headers";
import AuthForm from "@/components/auth-form";
import { Decrypt } from "@/lib/actions";
import LoggedPage from "@/components/loggedpage";
export default async function Account() {
  const session = await headers();
  const sessionValue = session.get("cookie").split("=")[1];
  const payload = await Decrypt(sessionValue);
  console.log(payload);
  let content = <AuthForm />;
  if (payload) {
    content = <LoggedPage userid={payload.userId} />;
  }
  return content;
}
