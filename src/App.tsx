import React from "react";
import ProductListCont from "./components/product/list/product-list.container";
import ProductList from "./components/product/list/product-list.component";
import { useState } from "react";

export function App() {
  return (
    <div>
      <h1>Grocery list</h1>
      <ProductListCont
        render={(products, loading, error) => (
          <>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <ProductList products={products} />
            )}
          </>
        )}
      />
    </div>
  );
}
