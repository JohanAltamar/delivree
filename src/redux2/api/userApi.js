import { firebase, db } from "../../services/firebase";

const dbRef = db.collection("users");

export const createUserApi = async (payload) => {
  const {
    email,
    password,
    address,
    telephone,
    neighborhood,
    fullname,
  } = payload;

  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  await user.updateProfile({
    displayName: fullname,
  });

  await dbRef
    .doc(user.uid)
    .set({ email, fullname, address, telephone, neighborhood });

  return;
};

export const loginUserApi = async (payload) => {
  const { email, password } = payload;

  const { user } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  const userInfo = await fetchUserInfoApi(user.uid);

  return userInfo;
};

export const recoverPasswordApi = (email) => {
  return firebase.auth().sendPasswordResetEmail(email).then();
};

export const fetchUserInfoApi = async (uid) => {
  const userInfo = await dbRef.doc(uid).get();

  return { id: userInfo.id, ...userInfo.data() };
};

export const logoutUserApi = async () => {
  return await firebase.auth().signOut();
};

export const fetchUserLatestOrdersApi = async (uid) => {
  let orders = [];
  const dbOrdersRef = db.collection("orders");
  const query = dbOrdersRef
    .where("id", "==", uid)
    .orderBy("createdAt", "desc")
    .limit(3);

  const res = await query.get();
  res.forEach(
    (doc) => (orders = [...orders, { orderID: doc.id, ...doc.data() }])
  );
  return orders;
};

const currentUser = () => {
  return firebase.auth().currentUser;
};

const reauthenticateUser = async (password) => {
  const user = currentUser();
  const credentials = firebase.auth.EmailAuthProvider.credential(
    user.email,
    password
  );

  return await user.reauthenticateWithCredential(credentials);
};

export const updateInfo = async (newInfo) => {
  const user = currentUser();
  const userInfo = { ...newInfo };

  await reauthenticateUser(userInfo.password);

  await user.updateEmail(userInfo.email);

  delete userInfo.password;
  delete userInfo.newPassword;

  return await dbRef.doc(user.uid).update({ ...userInfo });
};

export const updatePassword = async (password, newPassword) => {
  const user = currentUser();

  await reauthenticateUser(password);
  return await user.updatePassword(newPassword);
};

export const deleteUser = async (password) => {
  const user = currentUser();
  await reauthenticateUser(password);

  await dbRef.doc(user.uid).update({ enabled: false });
  return await user.delete();
};
