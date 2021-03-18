import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { productsByCategoriesFetchStart } from "../../redux2/actions/productsActions";
import ProductsList from "./ProductsList";
import { decodeURL } from "../../helpers/transformURL";
import ProductSelected from "./ProductSelected";
import ProductSkeleton from "./Skeleton/ProductSkeleton";

const CategoryContainer = ({ categoryName }) => {
  const dispatch = useDispatch();
  const { products, loading, selectedProduct } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0 || products[0]?.categoryName !== categoryName)
      dispatch(productsByCategoriesFetchStart(categoryName));
  }, [dispatch, categoryName]);

  return (
    <section className="grid__padding menu__category-container h-full overflow-auto">
      {loading && <ProductSkeleton />}
      {!loading && products.length > 0 && (
        <>
          <ProductsList
            products={products}
            category={decodeURL(categoryName)}
          />
          {selectedProduct ? (
            <div className="menu__item-selected">
              <ProductSelected product={selectedProduct} />
            </div>
          ) : (
            <h6 className="text-center menu__item-selected-null">
              Selecciona un producto de la lista
            </h6>
          )}
        </>
      )}
      {!loading && products.length === 0 && (
        <>
          <h2 className="margin-auto text-center">
            No hay productos en esta categoría
          </h2>
        </>
      )}
    </section>
  );
};

export default CategoryContainer;

CategoryContainer.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
