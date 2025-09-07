import { Order } from "../order/Order";
import { Rating } from "../rating/Rating";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isAdmin: boolean | null;
  lastName: string | null;
  orders?: Array<Order>;
  ratings?: Array<Rating>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
