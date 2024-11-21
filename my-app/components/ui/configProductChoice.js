"use client";
import classes from "@/app/shop/products/layout.module.css";
import conficClasses from "./configureProductChoice.module.css";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleProductSelection } from "@/lib/fetchMethods";
import { changeProdType } from "@/lib/redux/config_product_choice_slice";
export default function ConfigProductChoice() {
  const sliderValue = useRef();
  const sliderValue2 = useRef();
  const [priceValue, setPriceValue] = useState(1);
  const [priceValue2, setPriceValue2] = useState(2000); //this maximum value has to be set dynamically from the largest price in the collection
  const config_product_choice = useSelector((state) => {
    return state.config_product_choice.Product_type;
  });
  function handleMouseRelease(event) {
    handleProductSelection(config_product_choice, {
      min: sliderValue.current.value,
      max: sliderValue2.current.value,
    });
    setPriceValue(sliderValue.current.value);
  }
  function handleMouseRelease2(event) {
    handleProductSelection(config_product_choice, {
      min: sliderValue.current.value,
      max: sliderValue2.current.value,
    });
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
          max={+priceValue2 - 1}
          value={priceValue}
          ref={sliderValue}
          onMouseUp={handleMouseRelease}
          onChange={handleMouseRelease}
        />
        <p>$ {priceValue}</p>
        <input
          type="range"
          className={conficClasses.slider}
          min={+priceValue + 1}
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
          <p>Size</p>
          <div className={conficClasses.checkBoxs}>
            <input type="checkbox" /> box 1
            <input type="checkbox" />
            box 2
            <input type="checkbox" />
            box 3 <input type="checkbox" />
            box 4
            <input type="checkbox" />
            box 5
          </div>
          <p>Gender</p>
          <div className={conficClasses.checkBoxs}>
            <label htmlFor="female">
              female <input type="checkbox" value={"Female"} id="female" />
            </label>
            <label htmlFor="male">
              male <input type="checkbox" value={"Male"} id="male" />
            </label>
            <label htmlFor="both">
              both <input type="checkbox" value={"Both"} id="both" />
            </label>
          </div>
        </>
      )}
      {config_product_choice === "car" && (
        <>
          <p>brand</p>
          <div className={conficClasses.checkBoxs}>
            <input type="checkbox" />
            bmw
            <input type="checkbox" />
            toyota
            <input type="checkbox" />
            honda
            <input type="checkbox" />
            nissan
          </div>
        </>
      )}
      {config_product_choice === "house" && (
        <>
          <p>Built Quality</p>
          <div className={conficClasses.checkBoxs}>
            <input type="checkbox" />
            wood
            <input type="checkbox" />
            ceramic
            <input type="checkbox" />
            log
            <input type="checkbox" />
            clay
          </div>
        </>
      )}
      {config_product_choice === "phone" && (
        <>
          <p>Screen Size</p>
          <div className={conficClasses.checkBoxs}>
            <input type="checkbox" />
            6'
            <input type="checkbox" />
            7'
            <input type="checkbox" />
            8'
            <input type="checkbox" />
            9'
          </div>
        </>
      )}
      {config_product_choice === "laptop" && (
        <>
          <p>Screen Size</p>
          <div className={conficClasses.checkBoxs}>
            <input type="checkbox" />
            12"
            <input type="checkbox" />
            14"
            <input type="checkbox" />
            15"
            <input type="checkbox" />
            16"
          </div>
        </>
      )}
      {config_product_choice === "desktop" && (
        <>
          <p>storage Size</p>
          <div className={conficClasses.checkBoxs}>
            <input type="checkbox" />
            256 GB
            <input type="checkbox" />
            500 GB
            <input type="checkbox" />
            1 TB
            <input type="checkbox" />
            1.5 Tb
          </div>
        </>
      )}
    </div>
  );
}
