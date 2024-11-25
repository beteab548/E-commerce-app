import CartProducts from "@/components/ui/cartProducts";
import classes from "./cart.module.css";
import CheckOut from "@/components/checkout";
import { headers } from "next/headers";
import { Decrypt } from "@/lib/actions";
export default async function Cart() {
  const session = await headers();
  const sessionValue = session.get("cookie")?.split("=")[1];
  const payload = await Decrypt(sessionValue);
  return (
    <div className={classes.container}>
      <div className={classes.products}>
        <p>Cart Items List</p>
        {payload ? <CartProducts /> : <p>Login To Add Items To a Cart!</p>}
      </div>
      {payload && <div className={classes.checkout}>
        <p>Checkout Summary</p>
         <CheckOut />
      </div>}
    </div>
  );
}
