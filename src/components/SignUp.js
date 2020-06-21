import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import db, { auth } from "../services/firebase";
import { newUser, loggedUser, userIsLogged } from "../redux/actions";
import {SignUpSuccessMessage, EmailInUse, NetworkRequestFailed} from "./signup/SignUpAlertMessages"

export const SignUp = () => {
  const initialState = {
    fullname: "",
    address: "",
    telephone: "",
    email: "",
    password: "",
    city: "",
    neighborhood: "",
  };
  const delayTime = 2000;
  const userIsLoggedState = useSelector(state => state.userIsLogged);
  const loggedUserState = useSelector(state => state.loggedUserState);
  const [userUid, setUserUid] = useState('')
  const [signUpSuccessMessage, setSignUpSuccessMessage] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);
  const [networkRequestFailedMsg, setNetworkRequestFailedMsg]=useState(false);

  const user = useSelector((state) => state.newUser);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(function(){
        setSignUpSuccessMessage(true);
      })
      .catch(function (error) {
        var errorCode = error.code;
        console.log("Error with Sign Up", errorCode);
        switch (errorCode) {
          case "auth/email-already-in-use":
            setEmailInUse(true);
            break;
          case "auth/network-request-failed":
            setNetworkRequestFailedMsg(true);
            break;
          default:
            break;
        }
      });
  };

  useEffect(()=>{
    if(auth.currentUser){
      // console.log(auth.currentUser.uid)
      setUserUid(auth.currentUser.uid)
      let userRef = db.collection("users").doc(auth.currentUser.uid)
      let payload = {
        information: user,
        orders: []
      };
      userRef.set(payload)
      .then(function () {
        //New User info added to database successfully
        setTimeout(function(){
          dispatch(loggedUser(payload));
          dispatch(newUser('all',initialState));
          dispatch(userIsLogged(true));
        },delayTime-300);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    }
  },[signUpSuccessMessage])

  return (
    <div id="login-container">
      <Helmet>
        <title>Foodies restaurant - Sign Up</title>
        <meta
          name="description"
          content="Foodies family invites you to be part of this great family."
        />
      </Helmet>
      <SignUpSuccessMessage
        show={signUpSuccessMessage}
        onClose={() => setSignUpSuccessMessage(false)}
        delay={delayTime}
      />
      <EmailInUse
        show={emailInUse}
        onClose={() => setEmailInUse(false)}
        delay={delayTime}
      />
      <NetworkRequestFailed
       show={networkRequestFailedMsg}
       onClose={()=> setNetworkRequestFailedMsg(false)}
       delay={delayTime}
       />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@foodies.com"
            value={user.email}
            onChange={(event) => dispatch(newUser("email", event.target.value))}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(event) =>
              dispatch(newUser("password", event.target.value))
            }
            required
          />
        </Form.Group>
        <Form.Group controlId="user-name">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="input"
            placeholder="John Doe"
            value={user.fullname}
            onChange={(event) =>
              dispatch(newUser("fullname", event.target.value))
            }
            required
          />
        </Form.Group>
        <Form.Group controlId="user-phone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="input"
            placeholder="3055622663"
            value={user.telephone}
            onChange={(event) =>
              dispatch(newUser("telephone", event.target.value))
            }
            required
          />
        </Form.Group>
        <Form.Group controlId="user-address">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="input"
            placeholder="Calle 50 # 25 - 56"
            value={user.address}
            onChange={(event) =>
              dispatch(newUser("address", event.target.value))
            }
            required
          />
        </Form.Group>
        <Form.Group controlId="user-town">
          <Form.Label>Barrio</Form.Label>
          <Form.Control
            type="input"
            placeholder="Villa Hermosa"
            value={user.neighborhood}
            onChange={(event) =>
              dispatch(newUser("neighborhood", event.target.value))
            }
            required
          />
        </Form.Group>
        <Form.Group controlId="user-city">
          <Form.Label>Municipio</Form.Label>
          <Form.Control
            type="input"
            placeholder="Barranquilla"
            value={user.city}
            onChange={(event) => dispatch(newUser("city", event.target.value))}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <Link to="/login">Ya eres usuario? Logueate!</Link>
          </Form.Label>
        </Form.Group>
        <Button variant="warning" type="submit">
          Crear
        </Button>
      </Form>
      {(userIsLoggedState && userUid !== "" && userUid !== undefined) && (<Redirect to={`/login/${userUid}`}/>)}
    </div>
  );
};

export default SignUp;
