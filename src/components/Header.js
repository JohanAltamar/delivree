import React from "react";
import {Link} from "react-router-dom";
import BurgerIcon from "./header/BurgerMenu";
import { connect } from "react-redux";
import { toggleMenu } from "../redux/actions";
import { Container, Row, Col } from "react-bootstrap";

function Header({ toggleMenu }) {
  return (
    <Container fluid>
      <Row id="header">
        <Col xs={12} sm={{ offset: 1, span: 4 }}>
          <header>
            <h1 className="brand-name brand-color-main d-flex justify-content-center justify-content-sm-start align-items-center font-weight-bold text-decoration-none">
              <Link to='/'>Foodies</Link>
            </h1>
            <div
              id="burger-icon"
              className="d-sm-none"
              onClick={() => toggleMenu()}
            >
              <BurgerIcon />
            </div>
          </header>
        </Col>
        <Col
          sm={{ offset: 1, span: 6 }}
          className="d-none d-sm-flex justify-content-around align-items-center brand-color-main text-decoration-none" 
        >
          <h6><Link to="/">Inicio</Link></h6>
          <h6><Link to="/menu">Menu</Link></h6>
          <h6><Link to="/order">Carrito</Link></h6>
          <h6><Link to="/login">Ingreso</Link></h6>
        </Col>
      </Row>
    </Container>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu() {
      dispatch(toggleMenu());
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);
