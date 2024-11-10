'use client'
import ConfigProductChoice from "@/components/ui/configProductChoice";
import classes from "./layout.module.css";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
// export const metadata = {
//   title: "shop",
//   description: "simply sell and buy!",
// };
export default function ShoupLayout({ children }) {
  return (
    <Provider store={store}>
      <div className={classes.layoutContainer}>
        <h3>This Are the Available Products On The Gebeya.</h3>
        <div className={classes.container}>
          <ConfigProductChoice />
          <div className={classes.children}>{children}</div>
        </div>
      </div>
    </Provider>
  );
}
