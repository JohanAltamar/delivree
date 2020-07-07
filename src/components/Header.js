import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import BurgerIcon from "./header/BurgerMenu";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu} from "../redux/actions";
import { Row, Col } from "react-bootstrap";

function Header( ) {
  const menu = useSelector((state) => state.userInterface.toggleMenu);
  const dispatch = useDispatch();

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
            onClick={() => dispatch(toggleMenu())}
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
              <Link to="/cart">Carrito</Link>
            </li>
            <li>
              <Link to="/login">Ingreso</Link>
            </li>
          </nav>
        </Col>
      </Row>
      <section
        id="burger-menu-display-container"
        className={clsx("d-sm-none text-center", menu ? "" : "d-none")}
      >
        <div
          id="burger-menu-display-blank-section"
          onClick={() => dispatch(toggleMenu())}
        ></div>
        <div id="burger-menu-display">
          <nav>
            <li>
              <Link to="/" onClick={() => dispatch(toggleMenu())}>Inicio</Link>
            </li>
            <hr/>
            <li>
              <Link to="/menu" onClick={() => dispatch(toggleMenu())}>Menu</Link>
            </li>
            <hr/>
            <li>
              <Link to="/cart" onClick={() => dispatch(toggleMenu())}>Carrito</Link>
            </li>
            <hr/>
            <li>
              <Link to="/login" onClick={() => dispatch(toggleMenu())}>Ingreso</Link>
            </li>
            <hr/>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Header;
