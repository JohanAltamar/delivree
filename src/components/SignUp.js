import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSignUp = () => {
    // console.log('Sign Up');
    // console.log(email, password);

    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error with Sign Up", errorCode, errorMessage);
        // ...
      });
    setEmail("");
    setPassword("");
  };
  return (
    <div id="login-container">
      <Helmet>
        <title>Foodies restaurant - Sign Up</title>
        <meta
          name="description"
          content="Foodies family invites you to be part of this great family."
        />
      </Helmet>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="name@foodies.com" value={email} onChange={onEmailChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChange}/>
        </Form.Group>
        <Form.Group controlId="user-name">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="input" placeholder="John Doe" />
        </Form.Group>
        <Form.Group controlId="user-phone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="input" placeholder="3055622663" />
        </Form.Group>
        <Form.Group controlId="user-address">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="input" placeholder="Calle 50 # 25 - 56" />
        </Form.Group>
        <Form.Group controlId="user-town">
          <Form.Label>Barrio</Form.Label>
          <Form.Control type="input" placeholder="Villa Hermosa" />
        </Form.Group>
        <Form.Group controlId="user-city">
          <Form.Label>Municipio</Form.Label>
          <Form.Control type="input" placeholder="Barranquilla" />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <Link to="/login">Ya eres usuario? Logueate!</Link>
          </Form.Label>
        </Form.Group>
        <Button variant="warning" onClick={onSignUp}>
          Crear
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
