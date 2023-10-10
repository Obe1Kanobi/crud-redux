import { useState, useEffect } from "react";
import axios from "axios";
import { PRODUCTS_URL } from "./constants/api.constants";
import {
  selectError,
  selectLoading,
  selectProducts,
} from "./store/product/product.selectors";
import { useDispatch, useSelector } from "react-redux";
import { ErrCont } from "./style/Error.style";
import { createProductApi } from "./services/product-api.service";
import { ProductModel } from "./models/product.model";

export function useProducts() {
  // создали свой хук, который возращает нужные нам функции и объекты и отрисовывает их там куда передается, а передается он в product-list.container
  // const [products, setProducts] = useState<ProductModel[]>([]);
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

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
        dispatch({
          type: "product/setError",
          payload: `Something went wrong! Error: ${err}`,
        });
      })
      .finally(() => dispatch({ type: "product/setLoading", payload: false }));
    console.log(loading);
    console.log(error);
  }
  async function setProduct(newProductData: ProductModel) {
    try {
      const response = await createProductApi(PRODUCTS_URL, newProductData); // Используем API функцию для отправки POST-запроса
      if (response.status === 200) {
        // Если запрос успешно выполнен, обновляем состояние продуктов или выполняем другие действия
        dispatch({ type: "product/setProducts", payload: response.data });
      }
    } catch (err) {
      // Обработка ошибки при отправке POST-запроса
      console.error("Error creating product:", err);
    }
  }
  /// создать тут ещё одну async функцию

  // p.then().catch().finaly()
  if (loading) {
    return <ErrCont>Loading...</ErrCont>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return { products, loading, error };
}
