"use client";
import React, { useRef } from "react";
import classes from "./shop.module.css";
import Card from "@/components/ui/card";
import { fetchModels } from "@/lib/fetchMethods";
import { useEffect, useState } from "react";

const dummy_products = [
  {
    imagePath:
      "https://th.bing.com/th?id=OIP.0FqJNTN9m6TvB3gRVUnZIwHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    description: "joradn 1 red phantom",
    price: 420,
  },
  {
    imagePath:
      "https://th.bing.com/th?id=OIP.qXROwvqxGgmdxAvlibK-sAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    description: "adidas samba white black",
    price: 600,
  },
  {
    imagePath:
      "https://th.bing.com/th/id/OIP.GM3jwQLQexIknT6F8z8eOgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7",
    description: "all start white ",
    price: 300,
  },
  {
    imagePath:
      "https://th.bing.com/th?id=OIF.UlEdu%2bbtzi6iLw4kqIdLGQ&w=178&h=180&c=7&r=0&o=5&pid=1.7",
    description: "nike air blue",
    price: 300,
  },
  {
    imagePath:
      "https://th.bing.com/th/id/OIP.GM3jwQLQexIknT6F8z8eOgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7",
    description: "all start black ",
    price: 300,
  },
];
export default function ButtonRow() {
  const containerRef = useRef(null);
  const handleScroll = (event) => {
    // Prevent vertical scroll; only scroll horizontally within the button row
    event.preventDefault();
    containerRef.current.scrollLeft += event.deltaY;
  };
  const [modelNames, setModelsName] = useState([]);
  useEffect(() => {
    async function fetchData() {
    const modelNameArray=  await fetchModels();
      setModelsName(modelNameArray)
    }
    fetchData()
  }, []);

  return (
    <>
      {
        <div
          className={classes.buttonContainer}
          ref={containerRef}
          onWheel={handleScroll} // Enable middle-mouse scrolling horizontally
        >
          {modelNames.map((names, index) => {
            return (
              <button key={index} className={classes.scrollButton}>
                {names}
              </button>
            );
          })}
        </div>
      }
      <main className={classes.ProductsContainer}>
        <h2>Featured Products</h2>
        <ul>
          {dummy_products.map((products) => {
            return (
              <Card
                key={products.description}
                topic={"products"}
                imagePath={products.imagePath}
                description={products.description}
                price={products.price}
                btnText={"buy"}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
}
//make the buttons be read from the
