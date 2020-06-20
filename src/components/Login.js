import React, {useState} from "react";
import {Helmet} from "react-helmet"
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import db, {auth} from "../services/firebase"
import {loggedUser, userIsLogged} from "../redux/actions";

export const Login = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.loggedUser) || {}
  const logStatus = useSelector(state => state.userIsLogged)

  const [logUser, setLogUser] = useState({email: '', password: ''})

  const handleChange = param => event => {
    setLogUser({
      ...logUser,
      [param]: event.target.value
    })
  }
  const handleLogUser = async(event) => {
    event.preventDefault();
    await auth.signInWithEmailAndPassword(logUser.email, logUser.password)
    .then(function(result){
        console.log('User sign in');
        setLogUser({email: '', password: ''})
      })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });

    const authUser = auth.currentUser;
    if(authUser){
      var userRef = db.collection('users').doc(authUser.uid)
      userRef.get()
      .then(function(doc) {
        if (doc.exists) {
            const userInfo = doc.data()
            const uid = authUser.uid;
            dispatch(userIsLogged(true))
            dispatch(loggedUser({...userInfo, uid}));
        } else {
            console.log("No such document!");
        }
      })
      .catch(function(error) {
          console.log("Error getting document:", error);
      });
    }
  };

  return (
    <div id="login-container">
      <Helmet>
        <title>Foodies restaurant - Login</title>
        <meta
          name="description"
          content="Foodies menu is too different. We offer burgers, cocktails, salads, hot dogs, pastas, italian food, fast food and sandwich"
        />
      </Helmet>
      <Form onSubmit={handleLogUser}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@foodies.com"
            value={logUser.email}
            onChange={handleChange('email')}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={logUser.password}
            onChange={handleChange('password')}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>
            <Link to="/recover_password">Olvidaste la contraseña?</Link>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <Link to="/signup">Primera vez? Crea un usuario!</Link>
          </Form.Label>
        </Form.Group>
        <Button variant="warning" type="submit">
          Log in
        </Button>
      </Form>
      {(loggedUser !== undefined && loggedInUser.uid !== undefined && logStatus) && <Redirect to={`/login/${loggedInUser.uid}`}/>}
    </div>
  );
};

export default Login;
