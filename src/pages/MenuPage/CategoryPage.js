import React from "react";
import { useRouteMatch } from "react-router-dom";
import Layout from "../../components/Layout";
import CategoryContainer from "../../components/Menu/CategoryContainer";

const MenuCategoryPage = () => {
  const { params } = useRouteMatch();
  const { categoryName } = params;

  return (
    <Layout>
      <CategoryContainer categoryName={categoryName} />
    </Layout>
  );
};

export default MenuCategoryPage;
