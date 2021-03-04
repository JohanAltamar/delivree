import { firebase, db } from "../../services/firebase";

const dbRef = db.collection("users");

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

  await dbRef
    .doc(user.uid)
    .set({ email, fullname, address, cellphoneNumber, neighborhood });

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
