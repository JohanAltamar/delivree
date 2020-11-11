import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../redux/actions";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./header/header.css";

function Header() {
  const restaurantName = process.env.REACT_APP_Restaurant_Name || "Delivree";
  const menu = useSelector((state) => state.userInterface.toggleMenu);
  const dispatch = useDispatch();

  return (
    <header>
      <section id="header">
        <Col xs={12} sm={{ offset: 1, span: 4 }}>
          <div
            id="burger-icon-container"
            className="d-sm-none icon-container"
            onClick={() => dispatch(toggleMenu())}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <h1
            className="brand-name brand-color-main d-flex justify-content-center justify-content-sm-start align-items-center font-weight-bold text-decoration-none"
            onClick={() => {
              if (menu) {
                dispatch(toggleMenu());
              }
            }}
          >
            <Link to="/">{restaurantName}</Link>
          </h1>
          <Link
            id="cart-icon-container"
            className="d-sm-none icon-container"
            to="/cart"
            // onClick={() => history.push("/cart")}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
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
      </section>
      <section
        id="burger-menu-display-container"
        className="d-sm-none text-center"
        style={
          menu ? { backgroundColor: "rgba(0,0,0,0.4)", width: "100%" } : {}
        }
      >
        <div
          id="burger-menu-display"
          // className="sidenav"
          style={menu ? { width: "200px" } : { width: "0px" }}
        >
          <nav>
            <li>
              <Link to="/" onClick={() => dispatch(toggleMenu())}>
                Inicio
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/menu" onClick={() => dispatch(toggleMenu())}>
                Menu
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/cart" onClick={() => dispatch(toggleMenu())}>
                Carrito
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/login" onClick={() => dispatch(toggleMenu())}>
                Ingreso
              </Link>
            </li>
            <hr />
          </nav>
        </div>
        <div
          id="burger-menu-display-blank-section"
          className={menu ? "sidenav-opened" : undefined}
          onClick={() => dispatch(toggleMenu())}
        ></div>
      </section>
    </header>
  );
}

export default Header;
