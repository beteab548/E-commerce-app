"use client";
import Link from "next/link";
import classes from "./checkout.module.css";
import { useState, useEffect, Suspense } from "react";
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
      <div className={classes.chekoutForm}>
        <form>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="email" />
          </div>
          <div>
            <input type="number" placeholder="Phone Number" />
          </div>
          <div>
            <input type="text" placeholder="Address" />
          </div>
          <div>
            <input type="number" placeholder="Pox Number" />
          </div>
        </form>
      </div>
      <div className={classes.CheckOutItems}>
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
        </div>
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
