import { db } from "../../services/firebase";

export const placeOrderCartApi = async (payload) => {
  let dbRef = db.collection("orders");
  const res = await dbRef.add(payload);
  return res.id;
};
