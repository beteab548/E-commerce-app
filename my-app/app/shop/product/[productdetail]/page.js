'use client'
import { fetchSingleProduct } from "@/lib/fetchMethods";
import { useParams } from "next/navigation";
export default  function ProductsDetail() {
   const {productdetail}= useParams()
   console.log(decodeURIComponent(productdetail));
//   const { product_type, id } =  params.productdetail;
// async function awaitParams(){
//    const param=await params
// console.log(param);
// }
// awaitParams()
//   async function fetchProdData() {
//     const singleProdData = await fetchSingleProduct(product_type, id);
//     console.log(singleProdData);
//   }
//   fetchProdData()
  return <h2>this the products detail page</h2>;
}
