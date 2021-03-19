import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import GuestUserContainer from "../../components/ShoppingCart/GuestUserContainer";
import useRedirectToCart from "../../hooks/useRedirectToCart";

const SetUserInfoPage = () => {
  useRedirectToCart("toCheckout");

  return (
    <>
      <SEO title="Ingresa tus datos" />
      <Layout>
        <article className="cart__user-info-main-container grid__padding">
          <div>Login Container</div>
          <GuestUserContainer />
        </article>
      </Layout>
    </>
  );
};

export default SetUserInfoPage;
