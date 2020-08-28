import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../App.css';

const Loading = () => {
  return (
    <div id="loading-spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <h5 className="title">Cargando...</h5>
    </div>
  );
};

export default Loading;
