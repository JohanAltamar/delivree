import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { startCheckLoggedUserAction } from "../../redux2/actions/userActions";
import LoginForm from "./Form";

const LoginContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCheckLoggedUserAction());
  }, [dispatch]);

  return (
    <section className="grid__padding">
      <LoginForm />
    </section>
  );
};

export default LoginContainer;
