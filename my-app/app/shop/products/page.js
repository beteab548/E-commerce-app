"use client";
import classes from "./shop.module.css";
import Card from "@/components/ui/card";
import { fetchModels } from "@/lib/fetchMethods";
import { useEffect, useState, useRef } from "react";
import { handleProductSelection } from "@/lib/fetchMethods";
import { useDispatch } from "react-redux";
import { changeProdType } from "@/lib/redux/config_product_choice_slice";
import {
  setLoadingPageStateToTrue,
  setLoadingPageStateToFalse,
} from "@/lib/redux/pageLoadingSlice";
export default function ButtonRow() {
  //needs a better optimised way of retiving the product menu
  const containerRef = useRef(null);
  const [modelNames, setModelsName] = useState([]);
  const [productsArray, setProductsArray] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const modelNameArray = await fetchModels();
      setModelsName(modelNameArray);
    }
    fetchData();
  }, []);
  async function handelFetchProducts(ProductName) {
    dispatch(changeProdType(ProductName));
    dispatch(setLoadingPageStateToTrue());
    const productsData = await handleProductSelection(ProductName);
    setProductsArray(productsData);
    dispatch(setLoadingPageStateToFalse());
  }
  const handleScroll = (event) => {
    // Prevent vertical scroll; only scroll horizontally within the button row
    // event.preventDefault(); //this is causing the code to slow down
    containerRef.current.scrollLeft += event.deltaY;
  };
  // console.log(modelNames);
  return (
    <>
      <div
        className={classes.buttonContainer}
        ref={containerRef}
        onWheel={handleScroll} // Enable middle-mouse scrolling horizontally
      >
        {modelNames.map((names, index) => {
          return (
            <button
              type="submit"
              key={index}
              onClick={() => {
                handelFetchProducts(names);
              }}
              className={classes.scrollButton}
            >
              {names}
            </button>
          );
        })}
      </div>
      <main className={classes.ProductsContainer}>
        <h2>Featured Products now</h2>

        <ul>
          {/* {productsArray == [] && <p>No Products Available yet</p>} */}
          {productsArray.map((products, index) => {
            return (
              <Card
                key={index}
                topic={"products"}
                imagePath={products.imagePath}
                description={products.description}
                price={products.price}
                btnText={"buy"}
                product_type={products.product_type}
                product_id={products.id}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
}
