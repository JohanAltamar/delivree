import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../services/firebase";

import FeaturedItem from "./FeaturedItem";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    let featuredProducts = [];

    const dbRef = db.collection("products");
    const query = dbRef.where("featured", "==", true);
    const res = await query.get();

    res.forEach((item) => {
      featuredProducts = [...featuredProducts, { ...item.data(), id: item.id }];
    });
    setProducts(featuredProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    products.length > 0 && (
      <section className="feature__container grid__padding">
        <h4 className="feature__container-title">Los más pedidos</h4>
        <div className="feature__items-container">
          {products.map((todo) => (
            <FeaturedItem key={todo.id} {...todo} />
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
