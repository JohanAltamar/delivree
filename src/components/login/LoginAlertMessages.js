import React from "react"
import {Toast} from "react-bootstrap"

export const LoginSuccessful = (props) => {
  return(
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
          <strong className="mr-auto">Sign In Alert </strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>User is logged in successfully.</Toast.Body>
      </Toast>
    </div>
  )
}

export const UserNotFound = (props) => {
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
          <strong className="mr-auto">Sign In Alert </strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>Email is not registered, please sign up!</Toast.Body>
      </Toast>
    </div>
  )
}

export const WrongPassword = (props) => {
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
          <strong className="mr-auto">Sign In Alert </strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>Email and password do not match, please check!</Toast.Body>
      </Toast>
    </div>
  )
}

export const TooManyRequests = (props) => {
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
          <strong className="mr-auto">Sign In Alert </strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>The unsuccessfuly login limit has been reached. Try again later!</Toast.Body>
      </Toast>
    </div>
  )
}
