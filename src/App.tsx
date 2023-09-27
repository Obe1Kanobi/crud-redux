import React, { useEffect, useState } from "react";
import { ProductModel } from "./models/product.model";
import { PRODUCTS_URL } from "./constants/api.constants";
import ProductListCont from "./components/product/list/product-list.container";

export function App() {
  return (
    <div>
      <h1>Grocery list</h1>
      <ProductListCont />
    </div>
  );
}
