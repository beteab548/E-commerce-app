import Button from "./button";
import classes from "./detailPage.module.css";
export default function ProductDetail({
  model_name,
  price,
  description,
  imagePath,
}) {
  return (
    <div className={classes.container}>
      <div>
        <img src={imagePath} width={400} height={400} />
      </div>
      <div>
        <p>{model_name}</p>
      </div>
      <div>
        <p>$ {price}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <Button path={"/cart"} textDisplay={"add to cart"} />
    </div>
  );
}
