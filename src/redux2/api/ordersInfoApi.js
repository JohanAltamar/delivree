import { db } from "../../services/firebase";

export const fecthOrderInfoApi = (orderID) => {
  const dbRef = db.collection("orders").doc(orderID);
  return dbRef.get().then((doc) => ({ orderID: doc.id, ...doc.data() }));
};
