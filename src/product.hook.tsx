import { ProductModel } from "./models/product.model";
import { useState, useEffect } from "react";
import axios from "axios";
import { PRODUCTS_URL } from "./constants/api.constants";
import ProductList from "./components/product/list/product-list.component";

export function useProducts() {
  // создали свой хук, который возращает нужные нам функции и объекты и отрисовывает их там куда передается, а передается он в product-list.container
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      axios(PRODUCTS_URL).then((res) => setProducts(res.data));
      setLoading(false); // loading в false при успешной загрузке
    } catch (e) {
      setError(`Something went wrong! Error: ${e}`);
      setLoading(false); // loading в false при ошибке
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return { products, loading, error };
}
