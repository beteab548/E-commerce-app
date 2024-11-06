import Button from "./button";
import classes from "./card.module.css";
export default function Card({ title, description, btnText }) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div className={classes.description}>
        <p>{description}</p>
      </div>
      <div className={classes.btn}>
        <Button textDisplay={btnText} path={"shop"} />
      </div>
    </div>
  );
}
