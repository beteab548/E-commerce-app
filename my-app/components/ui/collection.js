import Card from "./card";
import classes from './collection.module.css'
const dummy_Collections = [
  {
    title: "Men shoe",
    description:
      "select shoe from variety of options that are available to you now!  ",
    btnTxt: "browse",
  },
  {
    title: "Women shoe",
    description:
      "select shoe from variety of options that are available to you now! ",
    btnTxt: "browse",
  },
  {
    title: "Kids shoe",
    description:
      "select shoe from variety of options that are available to you now! ",
    btnTxt: "browse",
  },
  {
    title: "Oldies shoe",
    description:
      "select shoe from variety of options that are available to you now! ",
    btnTxt: "browse",
  }
];
export default function Collections() {
  return (
    <main className={classes.main}>
      <ul>
        {dummy_Collections.map((collections) => {
          return (
            <li key={collections.title}>
              <Card
                title={collections.title}
                description={collections.description}
                btnText={collections.btnTxt}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
