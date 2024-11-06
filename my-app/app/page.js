import Button from "@/components/ui/button";
import classes from "./page.module.css";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Collections from "@/components/ui/collection";
export default function HomePage() {
  return (
    <>
      <section className={classes.homeContainer}>
        <div className={classes.leftItmes}>
          <Image src={logo} width={300} height={400} alt="logo image" />
        </div>
        <div className={classes.rightItmes}>
          <h1>shop everything you want now!</h1>
          <h2>this is an online merkato for domestic sells and purchases.</h2>
          <Button textDisplay={"shop"} path={"/shop"} />
        </div>
      </section>
      <section >
        <Collections />
      </section>
    </>
  );
}
