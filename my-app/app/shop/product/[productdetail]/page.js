import { fetchSingleProduct } from "@/lib/fetchMethods";
import ProductDetail from "@/components/ui/detailPage";
export default async function ProductsDetail({ params }) {
  const param = await params;
  const searchParams = decodeURIComponent(param.productdetail).split("=");
  const values = searchParams[1].split("&");
  const product_id = searchParams[2];
  const product_type = values[0];
  const singleProdData = await fetchSingleProduct(product_type, product_id);
  return <ProductDetail productInfo={singleProdData} />;
}
