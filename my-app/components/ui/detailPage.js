"use client";
import classes from "./detailPage.module.css";
import { cartAction } from "@/lib/actions";
export default function ProductDetail({ productInfo }) {
  const { model_name, price, description, imagePath, gender } = productInfo;
 const updatedProductInfo=JSON.stringify(productInfo)
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
      <form action={cartAction}>
        <input type="hidden" value={updatedProductInfo} name="productInfo" />
        {/* <input type="hidden" value={"input values"} name="productInfo" /> */}
        <button type="submit" className={classes.button}>
          Add To cart
        </button>
      </form>
    </div>
  );
}
