import React from "react";
import { UlStyle } from "../../../App.style";
import { ProductCard } from "../card/product-card.component";
import { ProductModel } from "../../../models/product.model";

export default function ProductList(props: { products: ProductModel[] }) {
  return (
    <UlStyle>
      {props.products &&
        props.products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </UlStyle>
  );
}
