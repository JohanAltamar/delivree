import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SignUp = () => {
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
          <Form.Control type="input" placeholder="Villa Hermosa"/>
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
        <Button variant="warning" type="submit">
          Crear
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
