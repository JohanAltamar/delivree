import { firebase, db } from "../../services/firebase";

export const recoverPasswordApi = (email) => {
  return firebase.auth().sendPasswordResetEmail(email).then();
};

export const createUserApi = async (payload) => {
  const {
    email,
    password,
    address,
    cellphoneNumber,
    neighborhood,
    fullname,
  } = payload;

  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  await user.updateProfile({
    displayName: fullname,
  });

  const dbRef = db.collection("users");
  await dbRef.add({ email, fullname, address, cellphoneNumber, neighborhood });

  return;
};
