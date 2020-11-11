import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "./OrderTracker.css";

const OrderTracker = () => {
  const history = useHistory();
  const [orderNumber, setOrderNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/orders?id=${orderNumber}`);
  };
  
  return (
    <div id="order-tracker">
      <h3
        id="order-tracker-title"
        className="brand-color-secondary brand-font-family font-weight-bold"
      >
        Estado de su orden
      </h3>
      <Form id="order-tracker-search" onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            type="search"
            placeholder="Ingresa la orden"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <InputGroup.Append>
            <Button
              className="font-weight-bold"
              variant="danger"
              disabled={orderNumber.length < 10}
              type="submit"
            >
              <span>
                <FontAwesomeIcon icon={faSearch} /> Buscar
              </span>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
};

export default OrderTracker;
