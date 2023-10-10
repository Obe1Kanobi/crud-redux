import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

interface ProductState {
  products: ProductModel[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProductState = {
  products: [],
  loading: true,
  error: null,
};

export const productSlice = createSlice({
  name: "product", //сам слайс, в котором мы всё описываем, его название, редусеры, начальное состояние и т.д., на выходе он нам даёт
  // готовый экшн и готовый редусер, который мы можем поместить в стор
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false; // Устанавливаем loading в false после успешной загрузки
      state.error = null; // Сбрасываем error
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false; // Устанавливаем loading в false в случае ошибки
    },
    setNewProduct: (state, action) => {
      // Обработка данных о новом продукте, например, добавление его в массив продуктов
      state.products.unshift(action.payload);
    },
  },
  /// тут добавить ещё редусер, который обрабатывает асинх экшн
});

// Action creators are generated for each case reducer function
// Если делаем какой-то экшн то вносятся изменения
export const { setProducts, setError, setLoading, setNewProduct } =
  productSlice.actions;

export default productSlice.reducer;
