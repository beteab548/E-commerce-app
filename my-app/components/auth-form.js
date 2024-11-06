import Link from "next/link";
import classes from "./auth.module.css";
export default function AuthForm({ formFormat }) {
  let btnText = "Login";
  if (formFormat) {
    btnText = formFormat;
  }
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h1>{btnText}</h1>
        {formFormat === "Reset-Password" && (
          <div>
            <input placeholder="Emial" type="text" />
          </div>
        )}
        <div>
        </div>
        {formFormat !== "Reset-Password" && (
          <>
            <div>
              <input placeholder="Emial" type="text" />
            </div>
            <div>
              <input placeholder="Password" type="password" />
            </div>
            {formFormat === "Register" && (
              <div>
                <input type="password" placeholder="confirm password" />
              </div>
            )}
          </>
        )}
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
          <div>
            <Link href={"/account/reset-password"}> Forgot Password? </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
