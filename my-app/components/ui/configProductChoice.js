"use client";
import classes from "@/app/shop/layout.module.css";
import conficClasses from "./configureProductChoice.module.css";
import { useState, useRef } from "react";
export default function ConfigProductChoice() {
  const sliderValue = useRef();
  const sliderValue2 = useRef();
  const [priceValue, setPriceValue] = useState(1000);
  const [priceValue2, setPriceValue2] = useState(1000);
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
        />
        <p>$ {priceValue2}</p>
        <p> $ max</p>
      </div>
      <div>selecte 2</div>
      <div>selecte 3</div>
      <div>selecte 4</div>
    </div>
  );
}
