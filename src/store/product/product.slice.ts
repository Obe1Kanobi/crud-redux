import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";
import { ProductStateModel } from "../../models/state/product-state.model";

export const initialState: ProductModel[] = [];

export const productSlice = createSlice({
  name: "product", //сам слайс, в котором мы всё описываем, его название, редусеры, начальное состояние и т.д., на выходе он нам даёт
  // готовый экшн и готовый редусер, который мы можем поместить в стор
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
      return [...state, ...action.payload];
    },
  },
  /// тут добавить ещё редусер, который обрабатывает асинх экшн
});

// Action creators are generated for each case reducer function
// Если делаем какой-то экшн то вносятся изменения
export const { setProductsAction } = productSlice.actions;

export default productSlice.reducer;
