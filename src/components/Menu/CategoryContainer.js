import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { productsByCategoriesFetchStart } from "../../redux2/actions/productsActions";
import ProductsList from "./ProductsList";
import { decodeURL } from "../../helpers/transformURL";

const CategoryContainer = ({ categoryName }) => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsByCategoriesFetchStart(categoryName));
  }, [dispatch, categoryName]);

  return (
    <section className="grid__padding">
      {loading && <h2>Loading ...</h2>}
      {!loading && products.length > 0 && (
        <ProductsList products={products} category={decodeURL(categoryName)} />
      )}
    </section>
  );
};

export default CategoryContainer;

CategoryContainer.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
