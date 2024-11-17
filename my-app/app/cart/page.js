import CartProducts from "@/components/ui/cartProducts";
import classes from "./cart.module.css";
export default function Cart() {
  return (
    <div className={classes.container}>
      <div className={classes.products}>
        <p>Cart Items List</p>
        <CartProducts />
      </div>
      <div className={classes.checkout}>this is the order checkout button</div>
    </div>
  );
}
