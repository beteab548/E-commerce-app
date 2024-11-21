"use server";
import mongoose from "mongoose";
import {
  shoe,
  jacket,
  laptop,
  phone,
  desktop,
  car,
  house,
  hoddie,
  tshirt,
  pant,
  Connect,
} from "./database";

let URl = "http://localhost:3000/api/";
let formPage = "login";
//dummy form actions
// export async function handleFormBtn(btnText, formdata) {
//   let method = "POST";
//   const updatedBtnText = btnText.toLowerCase();
//   formPage = updatedBtnText;
//   let formdatas;
//   if (updatedBtnText === "password-resetting") {
//     formdatas = { password: formdata.get("password") };
//     method = "PATCH";
//     formPage = "reset-password";
//   }
//   formdatas = {
//     email: formdata.get("email"),
//     password: formdata.get("password"),
//   };
//   const response = await fetch(`${URl}${formPage}`, {
//     method: method,
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formdatas),
//   });
//   const resData = await response.json();
// }
export async function fetchModels() {
  const allModels = mongoose.modelNames();
  const itemsToExclude = ["User", "cart", "order"];
  const modelNames = allModels.filter((models) => {
    return !itemsToExclude.includes(models);
  });
  return modelNames;
}
let query = {};
export async function handleProductSelection(modelName, priceRange) {
  await Connect();
  // code to insert datas to the database
  // await shoe.create({
  //   brand: "All Star",
  //   description: "Yellow All Star ",
  //   price: "459",
  //   color: "yellow",
  //   gender: "Both",
  //   size: "9",
  //   product_type: "shoe",
  //   imagePath:
  //     "https://th.bing.com/th?id=OIP.1RfKeDjiffAd7MnXDykgcQAAAA&w=285&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  // });
  // await jacket.create({
  //   brand: "Gucci",
  //   description: "Brown Lether ",
  //   price: "1300",
  //   color: "Brown",
  //   gender: "Men",
  //   size: "XL",
  //   product_type: "jacket",
  //   imagePath:
  //     " https://th.bing.com/th/id/OIP.6fjBx_fD9V6TvcbVxDLXxQHaIl?w=205&h=238&c=7&r=0&o=5&pid=1.7",
  // });
  // await hoddie.create({
  //   brand: "Vintage",
  //   description: "Red Hoddie With Fur ",
  //   price: "359",
  //   color: "Red",
  //   gender: "Both",
  //   size: "XXL",
  //   product_type: "hoddie",
  //   imagePath:
  //     "https://th.bing.com/th/id/OIP.OtCgzJ4hBI2VG_W0K-1uRAHaJE?w=202&h=248&c=7&r=0&o=5&pid=1.7",
  // });
  // await pant.create({
  //   brand: "Denim",
  //   description: "Dark Blue Denim ",
  //   price: "229",
  //   color: "Dark Blue",
  //   gender: "Women",
  //   size: "32",
  //   product_type: "pant",
  //   imagePath:
  //     "https://th.bing.com/th?id=OIP.lGM5ZAq1ny-ikrmov8d_-QHaIr&w=231&h=270&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  // });
  // await laptop.create({
  //   model_name: "HP",
  //   description: "Old Hp Laptop ",
  //   price: "159",
  //   color: "grey",
  //   screen_size: '15',
  //   product_type: "laptop",
  //   storage_size: "500GB",
  //   ram_size: "4gb",
  //   imagePath:
  //     "https://th.bing.com/th?id=OIP.ZMj8cOs4Vw4QavsS6vEt8AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  // });
  // await desktop.create({
  //   model_name: "HP",
  //   description: "Old Hp Laptop ",
  //   price: "359",
  //   color: "grey",
  //   product_type: "desktop",
  //   storage_size: "256Gb",
  //   ram_size: "6gb",
  //   imagePath:
  //     "https://th.bing.com/th/id/OIP.bL7oPfVOHWUp5Fe7m-cJtwHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7",
  // });

  if (priceRange) {
    query = { price: { $gte: +priceRange.min, $lte: +priceRange.max } };
  }
  if (modelName === "shoe") {
    const productObjectArray = [];
    const allShoes = await shoe.find(query).limit(5);
    allShoes.map((allShoes) => {
      return productObjectArray.push({
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
      });
    });
    return productObjectArray;
  }
  if (modelName === "pant") {
    const productObjectArray = [];
    const allPants = await pant.find(query);
    allPants.map((allPants) => {
      return productObjectArray.push({
        id: allPants._id.toString(),
        brand: allPants.brand,
        size: allPants.size,
        imagePath: allPants.imagePath,
        price: allPants.price,
        description: allPants.description,
        color: allPants.color,
        model_name: allPants.model_name,
        gender: allPants.gender,
        product_type: allPants.product_type,
      });
    });
    return productObjectArray;
  }
  if (modelName === "hoddie") {
    const productObjectArray = [];
    const allHoddies = await hoddie.find(query);
    allHoddies.map((allHoddies) => {
      return productObjectArray.push({
        id: allHoddies._id.toString(),
        brand: allHoddies.brand,
        size: allHoddies.size,
        imagePath: allHoddies.imagePath,
        price: allHoddies.price,
        description: allHoddies.description,
        color: allHoddies.color,
        gender: allHoddies.gender,
        product_type: allHoddies.product_type,
      });
    });
    return productObjectArray;
  }
  if (modelName === "jacket") {
    console.log("in the jacket");

    const allJackets = await jacket.find(query);
    const productObjectArray = [];
    allJackets.map((allJackets) => {
      return productObjectArray.push({
        id: allJackets._id.toString(),
        brand: allJackets.brand,
        size: allJackets.size,
        imagePath: allJackets.imagePath,
        price: allJackets.price,
        description: allJackets.description,
        color: allJackets.color,
        gender: allJackets.gender,
        product_type: allJackets.product_type,
      });
    });
    console.log(productObjectArray);
    return productObjectArray;
  }
  if (modelName === "tshirt") {
    const allTshirt = await tshirt.find(query);
    const productObjectArray = [];
    allTshirt.map((allTshirt) => {
      return productObjectArray.push({
        id: allTshirt._id.toString(),
        brand: allTshirt.brand,
        size: allTshirt.size,
        imagePath: allTshirt.imagePath,
        price: allTshirt.price,
        description: allTshirt.description,
        color: allTshirt.color,
        gender: allTshirt.gender,
        product_type: allTshirt.product_type,
      });
    });
    return productObjectArray;
  }
  if (modelName === "laptop") {
    const allLaptops = await laptop.find(query);
    const productObjectArray = [];
    allLaptops.map((allLaptops) => {
      return productObjectArray.push({
        id: allLaptops._id.toString(),
        size: allLaptops.size,
        imagePath: allLaptops.imagePath,
        price: allLaptops.price,
        description: allLaptops.description,
        model_name: allLaptops.model_name,
        product_type: allLaptops.product_type,
      });
    });
    return productObjectArray;
  }
  if (modelName === "desktop") {
    const allDesktop = await desktop.find(query);
    const productObjectArray = [];
    allDesktop.map((allDesktop) => {
      return productObjectArray.push({
        id: allDesktop._id.toString(),
        brand: allDesktop.brand,
        size: allDesktop.size,
        imagePath: allDesktop.imagePath,
        price: allDesktop.price,
        description: allDesktop.description,
        model_name: allDesktop.model_name,
        Storage_size: allDesktop.storage_size,
        product_type: allDesktop.product_type,
      });
    });
    return productObjectArray;
  }
  if (modelName === "phone") {
    const allPhones = await phone.find(query);
    const productObjectArray = [];
    allPhones.map((allPhones) => {
      return productObjectArray.push({
        id: allPhones._id.toString(),
        brand: allPhones.brand,
        size: allPhones.size,
        imagePath: allPhones.imagePath,
        price: allPhones.price,
        description: allPhones.description,
        color: allPhones.color,
        product_type: allPhones.product_type,
      });
    });
    return productObjectArray;
  }
  if (modelName === "car") {
    const allCars = await car.find(query);
    const productObjectArray = [];
    allCars.map((allCars) => {
      return productObjectArray.push({
        id: allCars._id.toString(),
        imagePath: allCars.imagePath,
        price: allCars.price,
        description: allCars.description,
        model_name: allCars.model_name,
        product_type: allCars.product_type,
      });
    });
    return productObjectArray;
  }
  if (modelName === "house") {
    const allHouses = await house.find(query);
    const productObjectArray = [];
    allHouses.map((allHouses) => {
      return productObjectArray.push({
        id: allHouses._id.toString(),
        built_with: allHouses.built_with,
        imagePath: allHouses.imagePath,
        price: allHouses.price,
        description: allHouses.description,
        color: allHouses.color,
        product_type: allHouses.product_type,
      });
    });
    return productObjectArray;
  }
  // const ProductsToObject = {
  //   id: allShoes._id.toString(),
  //   brand: allShoes.brand,
  //   size: allShoes.size,
  //   imagePath: allShoes.imagePath,
  //   price: allShoes.price,
  //   description: allShoes.description,
  //   color: allShoes.color,
  //   model_name: allShoes.model_name,
  //   gender: allShoes.gender,
  //   product_type: allShoes.product_type,
  // };
  // console.log(ProductsToObject);
  // return ProductsToObject;

  // await desktop.create({
  //   description: "new desktop ",
  //   model_name: "dell ",
  //   price: "300",
  //   Screen_size: "15.6",
  //   product_type: "desktop",
  //   imagePath:
  //     "https://th.bing.com/th/id/OIP.bL7oPfVOHWUp5Fe7m-cJtwHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7",
  // });
  // await car.create({
  //   model_name: "BMW",
  //   description: "The newes on the market",
  //   price: "60000",
  //   color: "black",
  //   product_type: "car",
  //   imagePath:
  //     "https://th.bing.com/th/id/OIP.bHVKOaMPFF6htsTuCeqyegHaEo?w=255&h=180&c=7&r=0&o=5&pid=1.7",
  // });
  // await house.create({
  //   built_with: "pure wood",
  //   description: "perfect for a family",
  //   price: "600000",
  //   color: "cream",
  //   address: "kera",
  //   product_type: "house",
  //   imagePath:
  //     "https://th.bing.com/th/id/OIP.gZ56fyMzun2FTOr2pPJ93gHaFc?w=233&h=180&c=7&r=0&o=5&pid=1.7",
  // });
  // await tshirt.create({
  //   brand: "supreme",
  //   description: "dbz supreme t-shirt",
  //   price: "150",
  //   color: "green",
  //   size: "XXL",
  //   product_type: "tshirt",
  //   imagePath:
  //     "https://th.bing.com/th/id/OIP.OtCgzJ4hBI2VG_W0K-1uRAHaJE?w=202&h=248&c=7&r=0&o=5&pid=1.7",
  // });
  // await pants.create({
  //   brand: "thrasher",
  //   description: "light jeans",
  //   price: "250",
  //   color: "blue",
  //   gender: "male",
  //   size: "33",
  //   product_type: "pants",
  //   imagePath:
  //     "https://th.bing.com/th/id/OIP.OtCgzJ4hBI2VG_W0K-1uRAHaJE?w=202&h=248&c=7&r=0&o=5&pid=1.7",
  // });
}

export async function fetchSingleProduct(product_type, product_id) {
  let productDetailObject = [];
  try {
    const productData = await fetch(
      `http://localhost:3000/api/product/?product_type=${product_type}&id=${product_id}`,
      {
        method: "POST",
        headers: {
          Content_Type: "application/json",
        },
        body: JSON.stringify({
          product_type: product_type,
          product_id: product_id,
        }),
      }
    );
    const { product_detail } = await productData.json();
    productDetailObject = {
      id: product_detail[0]._id.toString(),
      model_name: product_detail[0].model_name,
      description: product_detail[0].description,
      price: product_detail[0].price,
      imagePath: product_detail[0].imagePath,
      product_type: product_detail[0].product_type,
      screen_size: product_detail[0].screen_size,
      storage_size: product_detail[0].storage_size,
      ram_size: product_detail[0].ram_size,
      brand: product_detail[0].brand,
      gender: product_detail[0].gender,
      size: product_detail[0].size,
      color: product_detail[0].color,
    };
    return productDetailObject;
  } catch (err) {
    console.log(err);
  }

  // const productDetailData=await productData.json()
  //   return productData;
}
export async function fetchCartItems() {
  const response = await fetch("http://localhost:3000/api/cart");
  const resData = await response.json();
  return resData.cartProducts;
}
