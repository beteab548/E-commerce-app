"use client";
import Link from "next/link";
import classes from "./auth.module.css";
import { handleFormBtn } from "@/lib/fetchMethods";
export default function AuthForm({ formFormat }) {
  let btnText = "Login";
  if (formFormat) {
    btnText = formFormat;
  }
  return (
    <div className={classes.container}>
      <form
        className={classes.form}
        action={(formdata) => {
          handleFormBtn(btnText, formdata);
        }}
      >
        <h1>{btnText}</h1>
        {formFormat === "Reset-Password" && (
          <div>
            <input placeholder="Emial" type="text" name="email" />
          </div>
        )}
        {formFormat === "Password-resetting" && (
          <div>
            <input placeholder="New Password" type="password" name="password" />
          </div>
        )}
        {formFormat !== "Reset-Password" &&
          formFormat !== "Password-resetting" && (
            <>
              <div>
                <input placeholder="Emial" type="text" name="email" />
              </div>
              <div>
                <input placeholder="Password" type="password" name="password" />
              </div>
              {formFormat === "Register" && (
                <div>
                  <input
                    type="password"
                    placeholder="confirm password"
                    name="confirm-password"
                  />
                </div>
              )}
            </>
          )}
        <div>
          <button type="submit">{btnText} </button>
        </div>
        <div className={classes.links}>
          <div>
            <Link
              href={
                formFormat === "Register" ? "/account" : "/account/register"
              }
            >
              {formFormat === "Register"
                ? "Login Existing Account"
                : "Create New Account"}{" "}
            </Link>
          </div>
          {btnText === "Login" && (
            <div>
              <Link href={"/account/reset-password"}> Forgot Password? </Link>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
