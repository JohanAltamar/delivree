import React from "react";

const ProductItem = () => (
  <div className="menu__products-list-item skeleton__products-container">
    <img
      className="menu__products-list-item-image skeleton__categories"
      alt="skeleton while loading finishes"
    />
    <div className="skeleton__products-line mt-3">
      <p className="menu__categories-item skeleton__products-title mt-0 mb-0">
        Titulo
      </p>
    </div>
    <div className="skeleton__products-line">
      <p className="menu__categories-item skeleton__products-price mt-0 mb-0">
        price
      </p>
    </div>
    <div className="skeleton__products-line">
      <p className="menu__categories-item skeleton__products-description mt-0">
        line 1
      </p>
    </div>
    <div className="skeleton__products-line">
      <p className="menu__categories-item skeleton__products-description mt-0">
        line 2
      </p>
    </div>
    <div className="skeleton__products-line">
      <p className="menu__categories-item skeleton__products-description mt-0">
        line 3
      </p>
    </div>
  </div>
);

const ProductSkeleton = () => {
  return (
    <div className="menu__products-list skeleton-list">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductSkeleton;
