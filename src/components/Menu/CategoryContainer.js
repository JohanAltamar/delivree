import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { productsByCategoriesFetchStart } from "../../redux2/actions/productsActions";
import ProductsList from "./ProductsList";
import { decodeURL } from "../../helpers/transformURL";
import ProductSelected from "./ProductSelected";

const CategoryContainer = ({ categoryName }) => {
  const dispatch = useDispatch();
  const { products, loading, selectedProduct } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(productsByCategoriesFetchStart(categoryName));
  }, [dispatch, categoryName]);

  return (
    <section className="grid__padding menu__category-container h-full overflow-auto">
      {loading && <h2>Loading ...</h2>}
      {!loading && products.length > 0 && (
        <ProductsList products={products} category={decodeURL(categoryName)} />
      )}
      <div className="menu__item-selected">
        {selectedProduct ? (
          <ProductSelected product={selectedProduct} />
        ) : (
          <h6 className="text-center">Selecciona un producto de la lista</h6>
        )}
      </div>
    </section>
  );
};

export default CategoryContainer;

CategoryContainer.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
