import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div id="login-container">
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
