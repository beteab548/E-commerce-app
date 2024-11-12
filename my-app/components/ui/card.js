import Button from "./button";
import classes from "./card.module.css";
export default function Card({
  title,
  description,
  btnText,
  price,
  imagePath,
  topic,
  product_type,
  product_id,
}) {
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
            <img
              src={imagePath}
              alt="products image"
              width={120}
              hieght={120}
            />
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
        <Button
          textDisplay={btnText}
          path={`/shop/product/product_type=${product_type}&id=${product_id}`}
        />
      </div>
    </div>
  );
}
