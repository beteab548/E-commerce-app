import classes from "./logged.module.css";
export default function LoggedPage({ email }) {
  //here i access the order history based on the userid and return
  return (
    <div className={classes.body}>
      <h1>welcome {email}</h1>
      <p>No Orders Have Been Placed Yet! </p>
    </div>
  );
  //logout button in here that destroys the session
}
