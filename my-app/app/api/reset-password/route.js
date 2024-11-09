import { Connect, User } from "@/lib/database";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
export async function POST(req) {
  const formData = await req.json();
  await Connect();
  const userExists = await User.findOne({ email: formData.email });
  if (!userExists) {
    return NextResponse.json({ message: "invalid Email Entered" });
  }
  const resetToken = crypto.randomBytes(32).toString("hex");
  const resetUrl = `http://localhost:3000/account/password-resetting?token=${resetToken}&email=${userExists.email}`;
  userExists.pwdResetToken = resetToken;
  userExists.pwdResetTokenExpiration = Date.now() + 3600000;
  await userExists.save();
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    Auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PWD,
    },
  });
  const mailOption = {
    from: "e-commerce@gmail.com",
    to: userExists.email,
    subject: "password resetting",
    html: `<p>You requested a password reset. Click the link below to reset your password:</p>
  <a href="${resetUrl}">Reset Password</a>
  <p>If you did not request a password reset, please ignore this email.</p>`,
  };
  const email = await transporter.sendMail(mailOption);
  console.log(email);
  return NextResponse.json({ message: "resetting password" });
  //send a link to that email that will reset the paswword
}
export async function PATCH(req) {
  const formdata = await req.json();
  //here read the email from the url and update the user database
  return NextResponse.json({ message: "updating the reset password" });
}
