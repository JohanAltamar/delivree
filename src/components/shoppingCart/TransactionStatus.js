import React, {useEffect, useState} from "react"
import {useLocation, useHistory} from "react-router-dom";
import {Button} from "react-bootstrap"
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const TransactionStatus = () => {
  let query = useQuery();
  let history = useHistory();

  const [status, setStatus] = useState(false);
  useEffect(() => {
    const checkTransactionStatus = async () => {
      const id = query.get("id");
      const result = await axios.get(`https://sandbox.wompi.co/v1/transactions/${id}`);
      console.log(result.data.data)
      setStatus(result.data.data)
    }
    checkTransactionStatus();
  },[])

  return(
    <div className="brand-font-family" id="transaction-status-container">
      <h5>Transacción finalizada.</h5>
      <table>
        <tbody>
          <tr>
            <th>Referencia:</th>
            {status && <td>{status.reference}</td>}
          </tr>
          <tr>
            <th>Pagado por:</th>
            {status && <td>{status.payment_method_type === "CARD" ? status.payment_method.extra.brand : status.payment_method_type}</td>}
          </tr>
          <tr>
            <th>Estado</th>
            {status &&<td>{status.status && status.status}</td>}
          </tr>
          <tr>
            <th>Total Pagado</th>
            {status && <td>$ {(status.amount_in_cents/100).toLocaleString('de-DE')}</td>}
          </tr>
        </tbody>
      </table>
      <div id="redirect-buttons" className="d-flex flex-column" style={{padding:"0 8.33%"}}>
        <Button variant="warning" onClick={()=>history.push("/")}>Seguimiento del pedido</Button>
        <Button variant="danger" onClick={()=>history.push("/")}>Inicio</Button>
      </div>
    </div>
  )
}

export default TransactionStatus;
