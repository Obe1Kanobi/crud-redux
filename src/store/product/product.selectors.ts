import { RootState } from "../store";

export const selectProducts = (state: RootState) => {
  return state.product.products;
};
