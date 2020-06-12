import React from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "./header/BurgerMenu";
import { connect } from "react-redux";
import { toggleMenu } from "../redux/actions";
import { Row, Col } from "react-bootstrap";

function Header({ toggleMenu }) {
  return (
    <header>
      <Row id="header">
        <Col xs={12} sm={{ offset: 1, span: 4 }}>
          <h1 className="brand-name brand-color-main d-flex justify-content-center justify-content-sm-start align-items-center font-weight-bold text-decoration-none">
            <Link to="/">Foodies</Link>
          </h1>
          <div
            id="burger-icon"
            className="d-sm-none"
            onClick={() => toggleMenu()}
          >
            <BurgerIcon />
          </div>
        </Col>
        <Col
          sm={{ offset: 1, span: 6 }}
          className="d-none d-sm-flex justify-content-around align-items-center brand-color-main text-decoration-none"
        >
          <nav>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/order">Carrito</Link>
            </li>
            <li>
              <Link to="/login">Ingreso</Link>
            </li>
          </nav>
        </Col>
      </Row>
    </header>
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
