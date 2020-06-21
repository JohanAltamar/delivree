import React from "react";
import {Toast} from "react-bootstrap";

export const SignUpSuccessMessage = (props) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
      }}
    >
      <Toast
        onClose={props.onClose}
        show={props.show}
        delay={props.delayTime}
        autohide
        style={{
          position: 'fixed',
          top:80,
          right: 0,
          zIndex: 10,
          backgroundColor:"rgba(100,255,100,0.85)"
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Sign Up Alert </strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>User was created successfully. Enjoy it.</Toast.Body>
      </Toast>
    </div>
  )
}

export const EmailInUse = (props) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
      }}
    >
      <Toast
        onClose={props.onClose}
        show={props.show}
        delay={props.delayTime}
        autohide
        style={{
          position: 'fixed',
          top:80,
          right: 0,
          zIndex: 10,
          backgroundColor:"rgba(255,50,50,0.85)",
          color:"#FFFFFF",
          fontWeight:"bold"
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Sign Up Alert </strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>Email is already in use. Check it out!</Toast.Body>
      </Toast>
    </div>
  )
}

export const NetworkRequestFailed = (props) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
      }}
    >
      <Toast
        onClose={props.onClose}
        show={props.show}
        delay={props.delayTime}
        autohide
        style={{
          position: 'fixed',
          top:80,
          right: 0,
          zIndex: 10,
          backgroundColor:"rgba(255,50,50,0.85)",
          color:"#FFFFFF",
          fontWeight:"bold"
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Sign Up Alert </strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>Check your internet connection and try again!</Toast.Body>
      </Toast>
    </div>
  )
}
