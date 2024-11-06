import classes from "./auth.module.css";
export default function AuthForm({ formFormat }) {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <div>
            <h1>Login</h1>
        </div>
        <div>
          <input placeholder="Emial" type="text" />
        </div>
        <div>
          <input placeholder="Password" type="password" />
        </div>
        {formFormat === "register" && (
          <div>
            <input type="text" />
          </div>
        )}
        <div>
            <button>Sign In </button>
        </div>
      </form>
    </div>
  );
}
