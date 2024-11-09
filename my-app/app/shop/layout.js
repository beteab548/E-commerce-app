import ConfigProductChoice from "@/components/ui/configProductChoice";
import classes from "./layout.module.css";
export const metadata = {
  title: "shop",
  description: "simply sell and buy!",
};
export default function ShoupLayout({ children }) {
  return (
    <div className={classes.layoutContainer}>
      <h3>This Are the Available Products On The Gebeya.</h3>
      <div className={classes.container}>
        <ConfigProductChoice />
        <div className={classes.children}>{children}</div>
      </div>
    </div>
  );
}
