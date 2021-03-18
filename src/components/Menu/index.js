import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import types from "../../redux2/types";
import { encodeURL } from "../../helpers/transformURL";
import CategorySkeleton from "./Skeleton/CategorySkeleton";

const MenuContainer = () => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (categories.length === 0)
      dispatch({ type: types.PRODUCTS__FETCH_CATEGORIES_START });
  }, [dispatch]);

  return (
    <section className="menu__categories-container grid__padding">
      {loading && (
        //
        <CategorySkeleton />
      )}

      {!loading &&
        categories.length > 0 &&
        categories.map(({ id, name, url }) => (
          <div className="menu__categories-item" key={id}>
            <Link to={`${path}/${encodeURL(name)}`}>
              <img
                className="menu__categories-item-image"
                src={url}
                alt={name}
              />
              <span className="menu__categories-item-title">{name}</span>
            </Link>
          </div>
        ))}
    </section>
  );
};

export default MenuContainer;
