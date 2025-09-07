import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  colors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountedprice?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  orderId?: SortOrder;
  ratingsId?: SortOrder;
  title?: SortOrder;
  titleprice?: SortOrder;
  updatedAt?: SortOrder;
};
