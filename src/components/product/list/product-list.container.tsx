import { ProductModel } from "../../../models/product.model";
import { useState, useEffect } from "react";
import React from "react";
import ProductList from "./product-list.component";
import axios from "axios";
import { PRODUCTS_URL } from "../../../constants/api.constants";

export default function ProductListCont() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    axios(PRODUCTS_URL).then((res) => setProducts(res.data));
  }
  return <ProductList products={products} />;
}
