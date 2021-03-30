import { capitalize } from "lodash-es";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import Layout from "../../components/Layout";
import CategoryContainer from "../../components/Menu/CategoryContainer";
import SEO from "../../components/SEO";
import { decodeURL } from "../../helpers/transformURL";

const MenuCategoryPage = () => {
  const { params } = useRouteMatch();
  const { categoryName } = params;

  return (
    <>
      <SEO title={capitalize(decodeURL(categoryName))} />

      <Layout>
        <CategoryContainer categoryName={categoryName} />
      </Layout>
    </>
  );
};

export default MenuCategoryPage;
