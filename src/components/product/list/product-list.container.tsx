import React from "react";
import { ProductModel } from "../../../models/product.model";
import { useProducts } from "../../../product.hook";

function ProductListCont({
  render,
}: {
  render: (
    products: ProductModel[],
    loading: boolean,
    error: string | null
  ) => JSX.Element;
}) {
  // используем хук useProducts для получения данных
  const { products, loading, error } = useProducts() as {
    // получаем отсюда продукты
    products: ProductModel[];
    loading: boolean;
    error: string | null;
  };

  // Вызовите функцию render, передав ей полученные данные
  return render(products, loading, error);
}

export default ProductListCont;
