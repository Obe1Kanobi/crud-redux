import { RootState } from "../store";

export const selectProducts = (state: RootState) => {
  return state.product.products;
};

// export const selectError = (state: RootState) => {
//   return state.product.products;
// };

// export const selectLoading = (state: RootState) => {
//   return state.product.products;
// };
