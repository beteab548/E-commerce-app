import Link from "next/link";

export default function Shop() {
  return (
    <Link href={"/shop/products"}>
      <p>Shop ❤️</p>
    </Link>
  );
}
