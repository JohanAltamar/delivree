import { db, firebase } from "../../services/firebase";

export const fetchCategoriesApi = async () => {
  let categories = [];

  const dbRef = db.collection("categories");
  const query = dbRef.where("enabled", "==", true);

  const res = await query.get();

  res.forEach(
    (doc) => (categories = [...categories, { id: doc.id, ...doc.data() }])
  );

  return categories;
};
