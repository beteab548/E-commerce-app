"use client";
import Link from "next/link";
import classes from "../app/checkout/checkout.module.css";
import { useState, useEffect } from "react";
import { fetchCartItems } from "@/lib/fetchMethods";
export default function CheckOut() {

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
        <ol>
          <p>Selected Items</p>
          {cartItmes[0]?.cart?.Items?.products.map((prods) => {
            return (
              <li key={prods.id} className={classes.lists}>
                {prods.description}
              </li>
            );
          })}
        </ol>
      <div>
        <p>total Price: $ {prodsQuantity}</p>
      </div>
      <div>
        <Link href={"/checkout"}>
          <button>Checkout</button>
        </Link>
      </div>
    </div>
      </div>
  );
}
