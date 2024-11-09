"use server";
import mongoose from "mongoose";
import { shoe } from "./database";
let URl = "http://localhost:3000/api/";
let formPage = "login";
export async function handleFormBtn(btnText, formdata) {
  let method = "POST";
  const updatedBtnText = btnText.toLowerCase();
  formPage = updatedBtnText;
  let formdatas;
  if (updatedBtnText === "password-resetting") {
    formdatas = { password: formdata.get("password") };
    method = "PATCH";
    formPage = "reset-password";
  }
  formdatas = {
    email: formdata.get("email"),
    password: formdata.get("password"),
  };
  const response = await fetch(`${URl}${formPage}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formdatas),
  });
  const resData = await response.json();
}
export async function fetchModels() {
  return mongoose.modelNames().slice(1);
}
export async function handleProductSelection(modelName) {
  // if (modelName === "shoe") {
  //   await shoe.create({
  //     brand: "all start",
  //     model_name: "all star",
  //     description: "newly made shoe",
  //     price: "300",
  //     color: "white",
  //     gender: "both",
  //     size: 9,
  //     imagePath:
  //       "https://th.bing.com/th/id/OIP.GM3jwQLQexIknT6F8z8eOgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7",
  //   });
  if (modelName === "shoe") {
    const allShoes = await shoe.findOne();
    const ProductsToObject = {
      id: allShoes._id.toString(),
      brand: allShoes.brand,
      size: allShoes.size,
      imagePath: allShoes.imagePath,
      price: allShoes.price,
      description: allShoes.description,
      color: allShoes.color,
      model_name: allShoes.model_name,
      gender: allShoes.gender,
    };
    console.log(ProductsToObject);
    return ProductsToObject;
  }
}
