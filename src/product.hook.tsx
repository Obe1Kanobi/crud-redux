import { useState, useEffect } from "react";
import axios from "axios";
import { PRODUCTS_URL } from "./constants/api.constants";
import { selectProducts } from "./store/product/product.selectors";
import { useDispatch, useSelector } from "react-redux";

export function useProducts() {
  // создали свой хук, который возращает нужные нам функции и объекты и отрисовывает их там куда передается, а передается он в product-list.container
  // const [products, setProducts] = useState<ProductModel[]>([]);
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const [error, setError] = useState<string | null>(null); // заменить на аналогичное только для redax
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);
  //res.data
  async function fetchProducts() {
    axios(PRODUCTS_URL)
      .then((res) =>
        dispatch({ type: "product/setProducts", payload: res.data })
      )
      .catch((err) => {
        setError(`Something went wrong! Error: ${err}`);
      })
      .finally(() => setLoading(false));
  }
  // p.then().catch().finaly()
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return { products, loading, error };
}
