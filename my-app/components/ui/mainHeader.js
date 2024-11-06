import Link from "next/link";
import AboutUs from "../aboutUs";
import Cart from "../cart";
import Profile from "../profile";
import Search from "../search";
import Shop from "../shop";
import classes from "./mainheader.module.css";
import logo from "@/public/logo.svg";
import Image from "next/image";

export default function MainHedaer() {
  return (
    <header className={classes.header}>
      <div className={classes.leftItmes}>
        <Shop />
        <AboutUs />
      </div>
      <div className={classes.centerItems}>
        <Link href={"/"}>
          <Image src={logo} width={50} height={50} alt="logo image" />
        </Link>
      </div>
      <div className={classes.rightItems}>
        <Search />
        <Cart />
        <Profile />
      </div>
    </header>
  );
}
