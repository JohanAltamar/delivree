import { decodeURL } from "../../helpers/transformURL";
import { db } from "../../services/firebase";

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

export const fetchProductsByCategoryApi = async (categoryName) => {
  let products = [];
  const categoryNameDecoded = decodeURL(categoryName);

  const catsDbRef = db.collection("categories");
  const query = catsDbRef
    .where("enabled", "==", true)
    .where("name", "==", categoryNameDecoded);
  const categoriesRes = await query.get();
  const { id } = categoriesRes.docs[0];

  const dbRef = db.collection("products");
  const queryProducts = dbRef
    .where("enabled", "==", true)
    .where("category", "==", id);
  const res = await queryProducts.get();
  res.forEach((doc) => {
    products = [...products, { id: doc.id, ...doc.data(), categoryName }];
  });

  return products;
};
