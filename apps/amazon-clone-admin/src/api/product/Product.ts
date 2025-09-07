import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Rating } from "../rating/Rating";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedprice: number;
  id: string;
  image: JsonValue;
  order?: Order | null;
  ratings?: Rating | null;
  title: string;
  titleprice: number;
  updatedAt: Date;
};
