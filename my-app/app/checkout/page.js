import Link from "next/link";
import classes from "./checkout.module.css";
export default function CheckOut() {
  // here extract the qunatity and the price of products in the cart that is passed as a prop
  return (
    <div className={classes.container}>
      <div>
        <p>total Price: $ 1400</p>
      </div>
      <div>
        <Link href={'/checkout'}>
        <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
}
