import classes from "./layout.module.css";
export const metadata = {
  title: "shop",
  description: "simply sell and buy!",
};

export default function ShoupLayout({ children }) {
  return (
    <div className={classes.layoutContainer}>
      <h3>This is the available products on the Gebeya.</h3>
      <div className={classes.container}>
        <div className={classes.productChoiceConfig}>
          selecte products to configure your choices!
          <div>selecte 1</div>
          <div>selecte 2</div>
          <div>selecte 3</div>
          <div>selecte 4</div>
        </div>
        <div className={classes.children}>{children}</div>
      </div>
    </div>
  );
}
