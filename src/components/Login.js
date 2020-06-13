import React from "react";
import {Helmet} from "react-helmet"
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div id="login-container">
      <Helmet>
        <title>Foodies restaurant - Login</title>
        <meta
          name="description"
          content="Foodies menu is too different. We offer burgers, cocktails, salads, hot dogs, pastas, italian food, fast food and sandwich"
        />
      </Helmet>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="name@foodies.com" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
          Log in
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
