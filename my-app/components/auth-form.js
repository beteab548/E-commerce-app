"use client";
import Link from "next/link";
import classes from "./auth.module.css";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Login } from "@/lib/actions";
export default function AuthForm({ formFormat }) {
  const [state, formAction] = useActionState(Login, undefined);
  let btnText = "Login";
  if (formFormat) {
    btnText = formFormat;
  }
  return (
    <div className={classes.container}>
      <form className={classes.form} action={formAction}>
        <h1>{btnText}</h1>
        {formFormat === "Reset-Password" && (
          <div>
            <input placeholder="Emial" type="text" name="email" required />
          </div>
        )}
        {formFormat === "Password-resetting" && (
          <div>
            <input
              placeholder="New Password"
              type="password"
              name="password"
              required
            />
          </div>
        )}
        {formFormat !== "Reset-Password" &&
          formFormat !== "Password-resetting" && (
            <>
              {state?.error && <p className={classes.error}>{state.error}</p>}
              <div>
                <input placeholder="Emial" type="text" name="email" required />
              </div>
              {state?.email && <p className={classes.error}>{state.email}</p>}
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  required
                />
              </div>
              {state?.password && (
                <p className={classes.error}>{state.password}</p>
              )}
              <Button btnText={btnText} />
              {formFormat === "Register" && (
                <div>
                  <input
                    type="password"
                    placeholder="confirm password"
                    name="confirm-password"
                    required
                  />
                </div>
              )}
            </>
          )}
        <div></div>
        <div className={classes.links}>
          <div>
            <Link
              href={
                formFormat === "Register" ? "/account" : "/account/register"
              }
            >
              {formFormat === "Register"
                ? "Log Into Existing Account"
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
function Button({ btnText }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      {pending ? "submitting" : btnText}
    </button>
  );
}
