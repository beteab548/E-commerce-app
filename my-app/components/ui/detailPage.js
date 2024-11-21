"use client";
import classes from "./detailPage.module.css";
import { cartAction } from "@/lib/actions";
export default function ProductDetail({ productInfo }) {
  const {
    model_name,
    price,
    description,
    imagePath,
    gender,
    screen_size,
    storage_size,
    ram_size,
    size,
    color,
  } = productInfo;
  const updatedProductInfo = JSON.stringify(productInfo);
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <div>
          <img src={imagePath} width={300} height={300} />
        </div>
      </div>
      <div className={classes.detail}>
        {model_name && (
          <div>
            <p>model_name: {model_name}</p>
          </div>
        )}
        {size && (
          <div>
            <p>size: {size}</p>
          </div>
        )}
        {ram_size && (
          <div>
            <p>ram_size: {ram_size}</p>
          </div>
        )}
        {screen_size && (
          <div>
            <p>screen_size: {screen_size}'</p>
          </div>
        )}
        {storage_size && (
          <div>
            <p>storage_size: {storage_size}</p>
          </div>
        )}
        {gender && (
          <div>
            <p>gender: {gender}</p>
          </div>
        )}

        {color && (
          <div>
            <p>color: {color}</p>
          </div>
        )}
        {price && (
          <div>
            <p>price:$ {price}</p>
          </div>
        )}
        {description && (
          <div>
            <p>description: {description}</p>
          </div>
        )}
      <form action={cartAction}>
        <input type="hidden" value={updatedProductInfo} name="productInfo" />

        <button type="submit" className={classes.button}>
          Add To cart
        </button>
      </form>
      </div>
    </div>
  );
}
