import React from "react";
import Layout from "../../components/Layout";
import GuestUserContainer from "../../components/ShoppingCart/GuestUserContainer";

const SetUserInfoPage = () => {
  return (
    <Layout>
      <article className="cart__user-info-main-container grid__padding">
        <div>Login Container</div>
        <GuestUserContainer />
      </article>
    </Layout>
  );
};

export default SetUserInfoPage;
