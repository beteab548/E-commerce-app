import classes from "./auth.module.css";
export default function AuthForm({ formFormat }) {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <div>
            <h3>Login</h3>
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="password" />
        </div>
        {formFormat === "register" && (
          <div>
            <input type="text" />
          </div>
        )}
      </form>
    </div>
  );
}
