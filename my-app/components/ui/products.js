import Card from "./card";
import classes from "./products.module.css";
const dummy_products = [
  {
    imagePath:
      "https://th.bing.com/th?id=OIP.0FqJNTN9m6TvB3gRVUnZIwHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    description: "joradn 1 red phantom",
    price: 420,
  },
  {
    imagePath:
      "https://th.bing.com/th?id=OIP.qXROwvqxGgmdxAvlibK-sAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    description: "adidas samba white black",
    price: 600,
  },
  {
    imagePath:
      "https://th.bing.com/th/id/OIP.GM3jwQLQexIknT6F8z8eOgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7",
    description: "all start white ",
    price: 300,
  },
  {
    imagePath:
      "https://th.bing.com/th?id=OIF.UlEdu%2bbtzi6iLw4kqIdLGQ&w=178&h=180&c=7&r=0&o=5&pid=1.7",
    description: "nike air blue",
    price: 300,
  },
  {
    imagePath:
      "https://th.bing.com/th/id/OIP.GM3jwQLQexIknT6F8z8eOgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7",
    description: "all start black ",
    price: 300,
  },
];
export default function DisplayProduts() {
  return (
    <main className={classes.ProductsContainer}>
      <h2>Featured Products</h2>
      <ul>
        {dummy_products.map((products) => {
          return (
            <li key={products.description}>
              <Card
                topic={"products"}
                imagePath={products.imagePath}
                description={products.description}
                price={products.price}
                btnText={"buy"}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
{
  /* <li key={products.imagePath}>
            <img src={products.imagePath} />
            <p>{products.description}</p>
            <p>{products.price}</p>
          </li> */
}
