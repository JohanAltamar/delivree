import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const data = [
  {
    id: 0,
    category: "burgers",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2Fmenu%2Fburguers-mobile.png?alt=media&token=3af7597f-07c7-4650-94e9-3a662937f188",
  },
  {
    id: 1,
    category: "cocktails",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2Fmenu%2Fcocktails-mobile.png?alt=media&token=d824accf-8093-4874-8661-9d83c40f1f69",
  },
  {
    id: 2,
    category: "hot dogs",
    image: 
      "https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2Fmenu%2FhotDogs-mobile.png?alt=media&token=1bb01a7a-c13f-45dd-aa50-77fbc8572fbd",
  },
  {
    id: 3,
    category: "pastas",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2Fmenu%2Fpastas-mobile.png?alt=media&token=7d9e4bca-bba9-44f1-ba56-928d01fa6065",
  },
  {
    id: 4,
    category: "salads",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2Fmenu%2Fsalads-mobile.png?alt=media&token=3223193b-6723-43d7-8370-09e09de6ca82",
  },
  {
    id: 5,
    category: "sandwich",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2Fmenu%2Fsandwich-mobile.png?alt=media&token=ead6067f-1584-4bcb-bf8a-e5a07ea2b47b",
  },
];

function Menu() {
  let { url } = useRouteMatch();
  return (
    <section
      id="menu-container"
      className="brand-font-family brand-color-secondary"
    >
      <h4 className="font-weight-bold text-center">Menu</h4>
      <section id="menu-categories">
        {data.map((product) => {
          return (
            <figure key={product.id}>
              <Link to={`${url}/${product.category}`}>
                <img src={product.image} alt={product.category} />
                <figcaption className="text-capitalize font-weight-bold">
                  {product.category}
                </figcaption>
              </Link>
            </figure>
          );
        })}
      </section>
    </section>
  );
}

export default Menu;
