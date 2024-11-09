import { NextResponse } from "next/server";
import { Connect } from "@/lib/database";
import { User } from "@/lib/database";
import JWT from "jsonwebtoken";
export async function POST(req) {
  const formdata = await req.json();
  const salt = "beteabbeteab";
  try {
    await Connect();
    //find if email already exisits in the database
    const userExists = await User.findOne({
      email: formdata.email,
      password: formdata.password,
    });
    if (userExists == null) {
      return NextResponse.json({
        message: "no user found with this Email Address!",
      });
    }
    //here generate webtoken and send it back
    const token = JWT.sign(formdata.email, salt);
    console.log('logged');
    return NextResponse.json({ token: token });
  } catch (err) {
    console.log(err);
    return NextResponse.json({meessage:'error occured logging user!'})
  }
}
