import { firebase } from "../../services/firebase";

export const recoverPasswordApi = (email) => {
  return firebase.auth().sendPasswordResetEmail(email).then();
};
