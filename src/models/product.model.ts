export type ProductModel = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number | string | { rate: number; count: number };
};
