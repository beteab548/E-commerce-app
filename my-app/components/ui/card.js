import Button from "./button";
import classes from "./card.module.css";
export default function Card({ title, description, btnText, price,imagePath, topic }) {
  return (
    <div className={classes.container}>
      {topic === "collections" && (
        <div>
          <h3>{title}</h3>
        </div>
      )}
      {topic === "products" && (
        <>
          <div>
            <img src={imagePath} alt="products image" />
          </div>
          <div>
            <p>$ {price}</p>
          </div>
        </>
      )}
      <div>
        <p>{description}</p>
      </div>
      <div>
        <Button textDisplay={btnText} path={"shop"} />
      </div>
    </div>
  );
}
