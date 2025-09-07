import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isAdmin?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  ratings?: RatingListRelationFilter;
  username?: StringFilter;
};
