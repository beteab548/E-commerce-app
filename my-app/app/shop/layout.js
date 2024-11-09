import classes from "./layout.module.css";
export const metadata = {
  title: "shop",
  description: "simply sell and buy!",
};

export default function ShoupLayout({ children }) {
  return (
    <>
      <div className={classes.container}>
        <h3>This is the available products on the Gebeya.</h3>
      </div>
      {children}
    </>
  );
}
