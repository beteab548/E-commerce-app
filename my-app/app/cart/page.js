import CartProducts from "@/components/ui/cartProducts";
import classes from "./cart.module.css";
import CheckOut from "../checkout/page";
export default function Cart() {
  return (
    <div className={classes.container}>
      <div className={classes.products}>
        <p>Cart Items List</p>
        <CartProducts />
      </div>
      <div className={classes.checkout}>
        <p>Checkout Summary</p>
        <CheckOut />
      </div>
    </div>
  );
}
