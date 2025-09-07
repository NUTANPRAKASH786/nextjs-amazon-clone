import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  colors?: JsonFilter;
  description?: JsonFilter;
  discountedprice?: FloatFilter;
  id?: StringFilter;
  image?: JsonFilter;
  order?: OrderWhereUniqueInput;
  ratings?: RatingWhereUniqueInput;
  title?: StringFilter;
  titleprice?: FloatFilter;
};
