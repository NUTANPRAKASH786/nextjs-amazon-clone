import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description: InputJsonValue;
  discountedprice: number;
  image?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  ratings?: RatingWhereUniqueInput | null;
  title: string;
  titleprice: number;
};
