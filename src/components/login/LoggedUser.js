import React from "react";
import {useParams} from "react-router-dom";
import {auth} from "../../services/firebase";
import {Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {userIsLogged} from "../../redux/actions";

const LoggedUser = () => {
  let {loggedUserUid} = useParams();

  const user = useSelector(state => state.userIsLogged);
  const dispatch = useDispatch();

  const logOut = () => {
      auth.signOut().then(function () {
      // Sign-out successful.
      console.log('Signin Out');
      dispatch(userIsLogged(false));
      // setUser(false)
    }).catch(function (error) {
      // An error happened.
    });
  }
  return(
    <div>
      User logged is {loggedUserUid}
      <div>
        <button onClick={logOut}>Log Out</button>
      </div>
      {!user && <Redirect to="/login"/>}
    </div>
  )
};

export default LoggedUser;
