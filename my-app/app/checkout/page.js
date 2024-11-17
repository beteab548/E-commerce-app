import classes from "./checkout.module.css";
export default function CheckOut() {
  // here extract the qunatity and the price of products in the cart that is passed as a prop
  return (
    <div className={classes.container}>
      <div>
        <p>total Price: $ 1400</p>
      </div>
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
}
