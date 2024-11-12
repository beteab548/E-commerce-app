"use client";
import { useParams } from "next/navigation";
import { fetchSingleProduct } from "@/lib/fetchMethods";
import { useEffect, useState } from "react";
export default function ProductsDetail() {
  const param = useParams();
  const searchParams = decodeURIComponent(param.productdetail).split("=");
  const values = searchParams[1].split("&");
  const product_id = searchParams[2];
  const product_type = values[0];
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchProdData() {
      setIsLoading(true);
      const singleProdData = await fetchSingleProduct(product_type, product_id);
      setProductData(singleProdData);
      setIsLoading(false);
    }
    fetchProdData();
  }, []);


}
