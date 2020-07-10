import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../services/firebase";
import { userIsLogged } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SignOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    auth
      .signOut()
      .then(function () {
        dispatch(userIsLogged(false));
        history.push("/login");
      })
      .catch(function (error) {});
  }, [dispatch, history]);
  return <></>;
};

export default SignOut;
