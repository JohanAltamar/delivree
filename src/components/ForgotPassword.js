import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

export const Login = () => {
  return (
    <div id="login-container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ingresa tu Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="name@foodies.com" />
        </Form.Group>

        <Button variant="warning" type="submit">
          Recuperar
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
