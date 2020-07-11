import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import db, { auth } from "../services/firebase";
import { logUserIn, pwaInstallProcess } from "../redux/actions";
import {
  LoginSuccessful,
  UserNotFound,
  WrongPassword,
  TooManyRequests,
} from "./login/LoginAlertMessages";
import * as Alerts from "./signup/SignUpAlertMessages";
import { developmentLog } from "../services/functions";

export const Login = (props) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedUser) || {};
  const logStatus = useSelector((state) => state.user.userIsLogged);

  const [logUser, setLogUser] = useState({ email: "", password: "" });
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [userNotFoundMsg, setUserNotFoundMsg] = useState(false);
  const [wrongPasswordMsg, setWrongPasswordMsg] = useState(false);
  const [tooManyRequestsMsg, setTooManyRequests] = useState(false);
  const [networkRequestFailedMsg, setNetworkRequestFailedMsg] = useState(false);
  const delayTime = 1000;

  const handleChange = (param) => (event) => {
    setLogUser({
      ...logUser,
      [param]: event.target.value,
    });
  };

  const handleLogUser = async (event) => {
    event.preventDefault();
    await auth
      .signInWithEmailAndPassword(logUser.email, logUser.password)
      .then(function (result) {
        developmentLog("User sign in");
        setLogUser({ email: "", password: "" });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        switch (errorCode) {
          case "auth/user-not-found":
            setUserNotFoundMsg(true);
            break;
          case "auth/wrong-password":
            setWrongPasswordMsg(true);
            break;
          case "auth/too-many-requests":
            setTooManyRequests(true);
            break;
          case "auth/network-request-failed":
            setNetworkRequestFailedMsg(true);
            break;
          default:
            break;
        }
      });
  };

  useEffect(() => {
    const authUser = auth.currentUser;
    if (authUser === null) {
      dispatch(pwaInstallProcess())
      return;
    } else if (!logStatus) {
      var userRef = db.collection("users").doc(authUser.uid);
      userRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            setLoginSuccessful(true);
            setTimeout(function () {
              const userInfo = doc.data();
              const uid = authUser.uid;
              // dispatch(userIsLogged(true));
              dispatch(logUserIn(true, { ...userInfo, uid }));
            }, delayTime);
          } else {
            developmentLog("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
    // eslint-disable-next-line
  }, [auth.currentUser, dispatch, logStatus]);

  return (
    <div id="login-container">
      <Helmet>
        <title>Foodies restaurant - Login</title>
        <meta
          name="description"
          content="Foodies menu is too different. We offer burgers, cocktails, salads, hot dogs, pastas, italian food, fast food and sandwich"
        />
      </Helmet>
      <LoginSuccessful
        show={loginSuccessful}
        onClose={() => setLoginSuccessful(false)}
        delay={delayTime}
      />
      <UserNotFound
        show={userNotFoundMsg}
        onClose={() => setUserNotFoundMsg(false)}
        delay={delayTime}
      />
      <WrongPassword
        show={wrongPasswordMsg}
        onClose={() => {
          setWrongPasswordMsg(false);
        }}
        delay={delayTime}
      />
      <TooManyRequests
        show={tooManyRequestsMsg}
        onClose={() => {
          setTooManyRequests(false);
        }}
        delay={delayTime}
      />
      <Alerts.NetworkRequestFailed
        show={networkRequestFailedMsg}
        onClose={() => setNetworkRequestFailedMsg(false)}
        delay={delayTime}
      />
      <Form onSubmit={handleLogUser}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@foodies.com"
            value={logUser.email}
            onChange={handleChange("email")}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={logUser.password}
            onChange={handleChange("password")}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>
            <Link to="/recover_password">Olvidaste la contraseña?</Link>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <Link to="/signup">Primera vez? Crea un usuario!</Link>
          </Form.Label>
        </Form.Group>
        <Button variant="warning" type="submit">
          {props.loginButton || "Ingresar"}
        </Button>
      </Form>
      {loggedInUser !== undefined && loggedInUser.uid !== "" && logStatus && (
        <Redirect
          to={
            props.redirectTo
              ? `${props.redirectTo}/${loggedInUser.uid}`
              : `/login/${loggedInUser.uid}`
          }
        />
      )}
    </div>
  );
};

export default Login;
