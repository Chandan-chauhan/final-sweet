import { SortOrder } from "../../util/SortOrder";

export type SweetOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
