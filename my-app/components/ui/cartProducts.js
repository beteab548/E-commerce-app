"use client";
import Link from "next/link";

import { fetchCartItems } from "@/lib/fetchMethods";
import classes from "./cartProducts.module.css";
import { useEffect, useState } from "react";
export default function CartProducts() {
  const [cartItmes, setCartItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setCartItems(await fetchCartItems());
    }
    fetchData();
  }, []);
  //fetch to an api to get he cart items and get them here
  return (
    <main className={classes.cartContainer}>
      <ul className={classes.container}>
        <div className={classes.tableNames}>
          <div>Product detail </div>
          <div>Price </div>
          <div>Quantity </div>
          <div>Total </div>
        </div>
        {cartItmes?.cartProducts?.map((products) => {
          return (
            <>
              <hr />
              <div className={classes.productslist}>
                <li key={products.id}>
                  <div className={classes.listContainer}>
                    <div>
                      <img src={products.image} width={70} height={70} />
                    </div>
                    <div>
                      <div>
                        <Link href={"/shop/products"}>{products.title}</Link>
                        <p> size :{products.size}</p>
                      </div>
                      <div>
                        <p>color: {products.color}</p>
                      </div>
                    </div>
                  </div>
                </li>
                <div className={classes.price}>
                  <div>
                    <p>${products.price}</p>
                  </div>
                </div>
                <div className={classes.quantity}>
                  <div>
                    <button>+</button>
                  </div>
                  <div>
                    <p>{products.quantity}</p>
                  </div>
                  <div>
                    <button>-</button>
                  </div>
                </div>
                <div className={classes.total}>
                  <p>$ 400</p>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </main>
  );
}
