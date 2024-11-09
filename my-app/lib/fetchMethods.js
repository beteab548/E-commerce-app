"use server";
import mongoose from "mongoose";
import { shoe, jacket } from "./database";

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
      product_type: allShoes.product_type,
    };
    console.log(ProductsToObject);
    return [ProductsToObject];
  }
  if (modelName === "jacket") {
    const allJackets = await jacket.findOne();
    const ProductsToObject = {
      id: allJackets._id.toString(),
      brand: allJackets.brand,
      size: allJackets.size,
      imagePath: allJackets.imagePath,
      price: allJackets.price,
      description: allJackets.description,
      color: allJackets.color,
      gender: allJackets.gender,
      product_type: allJackets.product_type,
    };
    console.log(ProductsToObject);
    return [ProductsToObject];
  }
}

// await shoe.create({
//   brand: "all star",
//   description: "brown lether ",
//   model_name: "all star",
//   price: "1300",
//   color: "brown",
//   gender: "men",
//   size: 9,
//   product_type: "shoe",
//   imagePath:
//     "https://th.bing.com/th?id=OIP.1RfKeDjiffAd7MnXDykgcQAAAA&w=285&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
// });
//   await jacket.create({
//     brand: "gucci",
//     description: "brown lether ",
//     price: "1300",
//     color: "brown",
//     gender: "men",
//     size: 'XL',
//     product_type:'jacket',
//     imagePath:
//     " https://th.bing.com/th/id/OIP.6fjBx_fD9V6TvcbVxDLXxQHaIl?w=205&h=238&c=7&r=0&o=5&pid=1.7"
//   });}
// }
