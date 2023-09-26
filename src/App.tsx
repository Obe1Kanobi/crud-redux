import React, { useEffect, useState } from "react";
import { ProductModel } from "./models/product.model";
import {
  Photo,
  PhotoCont,
  CardCont,
  Pechka,
  UlStyle,
  TitleStyle,
  LiStyle,
} from "./App.style";

import { PRODUCTS_URL } from "./constants/api.constants";

export function App() {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((data: ProductModel[]) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Grocery list</h1>
      <UlStyle>
        {products.map((product) => (
          <LiStyle key={product.id}>
            <TitleStyle>{product.title}</TitleStyle>
            <CardCont>
              <PhotoCont>
                <Photo src={product.image} alt={product.title} />
              </PhotoCont>
              <Pechka>
                <p>Description: "{product.description}"</p>
                <p>Price: ${product.price}</p>
              </Pechka>
            </CardCont>
            <p>Category: {product.category}</p>
            {typeof product.rating === "object" ? (
              <div>
                <p>Rating: {product.rating.rate}</p>
                <p>Number of ratings: {product.rating.count}</p>
              </div>
            ) : (
              <p>Rating: {product.rating}</p>
            )}
          </LiStyle>
        ))}
      </UlStyle>
    </div>
  );
}
