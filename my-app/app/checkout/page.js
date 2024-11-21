"use client";
import Link from "next/link";
import classes from "./checkout.module.css";
import { useState, useEffect } from "react";
import { fetchCartItems } from "@/lib/fetchMethods";
export default function CheckOut() {
  // here extract the qunatity and the price of products in the cart that is passed as a prop
  const [cartItmes, setCartItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setCartItems(await fetchCartItems());
    }
    fetchData();
  }, []);
  const prodsQuantity = cartItmes[0]?.cart?.Items?.products.reduce(
    (acc, prods) => {
      return acc + prods.quantity * +prods.price;
    },
    0
  );
  return (
    <div className={classes.container}>
      <div>
        <p>total Price: $ {prodsQuantity}</p>
      </div>
      <div>
        <Link href={"/checkout"}>
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
}
