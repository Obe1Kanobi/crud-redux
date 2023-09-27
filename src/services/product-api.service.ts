import { ProductModel } from "../models/product.model";
import axios, { AxiosResponse } from "axios";
export const fetchProductsApi = (): Promise<
  AxiosResponse<ProductModel[]>
> => {};
