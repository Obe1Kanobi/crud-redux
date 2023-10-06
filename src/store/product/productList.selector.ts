import { RootState } from "../store";
import { ProductStateModel } from "../../models/state/product-state.model";

const selectProductlist: (state: RootState) => ProductStateModel = (
  state: RootState
) => ({
  product: state.product,
});

export const selectList = (state: RootState) =>
  selectProductlist(state).product;
