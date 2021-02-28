import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({error}) => {
  return (
    error 
      ? <p className="error__message">{error.message}</p>
      : <> </>
  )
}

export default ErrorMessage

ErrorMessage.propTypes = {
  error: PropTypes.object,
}