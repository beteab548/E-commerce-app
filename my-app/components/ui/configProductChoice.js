"use client";
import classes from "@/app/shop/layout.module.css";
import conficClasses from "./configureProductChoice.module.css";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function ConfigProductChoice() {
  const sliderValue = useRef();
  const sliderValue2 = useRef();
  const [priceValue, setPriceValue] = useState(1);
  const [priceValue2, setPriceValue2] = useState(2000);
  const config_product_choice = useSelector((state) => {
    return state.config_product_choice.Product_type;
  });
  console.log(config_product_choice);
  function handleMouseRelease() {
    setPriceValue(sliderValue.current.value);
  }
  function handleMouseRelease2() {
    setPriceValue2(sliderValue2.current.value);
  }
  return (
    <div className={classes.productChoiceConfig}>
      Configure Your Choices
      <div>
        <p> $ min</p>
        <input
          type="range"
          className={conficClasses.slider}
          min={1}
          max={2000}
          value={priceValue}
          ref={sliderValue}
          onMouseUp={handleMouseRelease}
          onChange={handleMouseRelease}
        />
        <p>$ {priceValue}</p>
        <input
          type="range"
          className={conficClasses.slider}
          min={1}
          max={2000}
          ref={sliderValue2}
          onMouseUp={handleMouseRelease2}
          onChange={handleMouseRelease2}
          value={priceValue2}
        />
        <p>$ {priceValue2}</p>
        <p> $ max</p>
      </div>
      {(config_product_choice === "shoe" ||
        config_product_choice === "jacket" ||
        config_product_choice === "pants" ||
        config_product_choice === "tshirt" ||
        config_product_choice === "hoddie") && (
        <>
          
          <div className={conficClasses.checkBoxs}>
            <p>Size</p>
            <input type="checkbox" /> box 1
            <input type="checkbox" />
            box 2
            <input type="checkbox" />
            box 3
            <input type="checkbox" />
            box 4
            <input type="checkbox" />
            box 5
          </div>
          <div className={conficClasses.checkBoxs}>
            <p>Gender</p>
            <input type="checkbox" />
            female
            <input type="checkbox" />
            male
            <input type="checkbox" />
            both
          </div>
        </>
      )}
      <div>selecte 4</div>
    </div>
  );
}
