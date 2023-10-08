import { ProductModel } from "../models/product.model";
import axios from "axios";
import { AxiosResponse } from "axios";

export const createProductApi = (
  url: string,
  body: ProductModel
): Promise<AxiosResponse<ProductModel>> => {
  return axios.post(url, body);
};
