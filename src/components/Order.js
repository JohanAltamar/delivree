import React from "react";
import { Helmet } from "react-helmet";
import {Form, Button} from "react-bootstrap"
import {Redirect} from "react-router-dom"

function Order() {
     const orderID = 456542565; //CHANGE WHEN BACKEND IS  READY
  return (
    <section id="order" className="brand-color-main brand-font-family">
      <Helmet>
        <title>Foodies restaurant - Track your order</title>
        <meta
          name="description"
          content="Foodies web app lets you track your order status."
        />
      </Helmet>
      <Form>
        <Form.Group controlId="orderId">
          <Form.Label>Número de Orden</Form.Label>
          <Form.Control type="number" placeholder="Orden # 45698752" />
        </Form.Group>
        <Button variant="outline-danger"> 
            Buscar
        </Button>
        {orderID === 456542565 ? (  //CHANGE WHEN BACKEND IS READY
            <Redirect to={`/order/${orderID}`}/>
        ): null}
      </Form>
    </section>
  );
}

export default Order;
