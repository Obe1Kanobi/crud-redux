import axios, { AxiosResponse } from "axios";
import { ProductModel } from "../models/product.model";
import { PRODUCTS_URL } from "../constants/api.constants";

export const fetchProductsApi = (): Promise<AxiosResponse<ProductModel[]>> => {
  return axios.get<ProductModel[]>(PRODUCTS_URL);
};
