import classes from "./page.module.css";
export default function About() {
  return (
    <div className={classes.container}>
      <h2>Every Thing You want To Know About Us</h2>
      <img
        src="https://media.istockphoto.com/id/1203304146/photo/addis-ababas-addis-merkato.jpg?s=612x612&w=0&k=20&c=yB36UP-abnpqk3bzjQ43pvmMwzobBOWQVnrrqlrFZcA="
        width={1000}
        height={600}
        loading="lazy"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
        Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
        a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra
        tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
        Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit
        sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Sed aliquam ultrices mauris. Integer
        ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent
        adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
        Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl
        sagittis vestibulum. Aenean luctus egestas arcu. Duis consequat dui nec
        nisi volutpat eleifend.
      </p>
    </div>
  );
}
