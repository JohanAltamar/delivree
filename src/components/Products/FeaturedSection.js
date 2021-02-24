import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedItem from "./FeaturedItem";

const featuredProducts = [
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2FbroastedChicken100.webp?alt=media&token=0c8b5f03-f10b-467c-a7eb-d7225aee1f88",
    name: "broasted Chicken",
    price: 15000,
    id: "brodododooddodood",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2FbroastedChicken100.webp?alt=media&token=0c8b5f03-f10b-467c-a7eb-d7225aee1f88",
    name: "broasted Chicken",
    price: 15000,
    id: "brodododooddodooda",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2FbroastedChicken100.webp?alt=media&token=0c8b5f03-f10b-467c-a7eb-d7225aee1f88",
    name: "broasted Chicken",
    price: 15000,
    id: "brodododooddodoodaa",
  },
];

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(featuredProducts);
  }, []);

  return (
    products.length > 0 && (
      <section className="feature__container">
        <h4 className="feature__container-title">Los más pedidos</h4>
        <div className="feature__items-container">
          {products.map((todo) => (
            <FeaturedItem {...todo} />
          ))}
        </div>
        <Link to="/menu">
          <button className="btn btn-primary mt-4">Ver menú</button>
        </Link>
      </section>
    )
  );
};

export default FeaturedProducts;
