import Link from "next/link";
import classes from "./cartProducts.module.css";
export default function CartProducts() {
  const cart = [
    {
      id: "1",
      title: "All Star Shoe",
      size: "9",
      color: "yellow",
      price: "400",
      image:
        "https://th.bing.com/th?id=OIP.1RfKeDjiffAd7MnXDykgcQAAAA&w=285&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      quantity: 1,
    },
    {
      id: "1",
      title: "All Star Shoe",
      size: "9",
      color: "yellow",
      price: "400",
      image:
        "https://th.bing.com/th?id=OIP.1RfKeDjiffAd7MnXDykgcQAAAA&w=285&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      quantity: 1,
    },
    {
      id: "1",
      title: "All Star Shoe",
      size: "9",
      color: "yellow",
      price: "400",
      image:
        "https://th.bing.com/th?id=OIP.1RfKeDjiffAd7MnXDykgcQAAAA&w=285&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      quantity: 1,
    },
    
  ];
  return (
    <main className={classes.cartContainer}>
      <ul className={classes.container}>
        <div className={classes.tableNames}>
          <div>Product detail </div>
          <div>Price </div>
          <div>Quantity </div>
          <div>Total </div>
        </div>
        {cart.map((products) => {
          return (
            <>
              <hr />
              <div className={classes.productslist}>
                <li key={products.id}>
                  <div className={classes.listContainer}>
                    <div>
                      <img src={products.image} width={70} height={70} />
                    </div>
                    <div>
                      <div>
                        <Link href={"/shop/products"}>{products.title}</Link>
                        <p> size :{products.size}</p>
                      </div>
                      <div>
                        <p>color: {products.color}</p>
                      </div>
                    </div>
                  </div>
                </li>
                <div className={classes.price}>
                  <div>
                    <p>${products.price}</p>
                  </div>
                </div>
                <div className={classes.quantity}>
                  <div>
                    <button>+</button>
                  </div>
                  <div>
                    <p>{products.quantity}</p>
                  </div>
                  <div>
                    <button>-</button>
                  </div>
                </div>
                <div className={classes.total}>
                  <p>$ 400</p>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </main>
  );
}
