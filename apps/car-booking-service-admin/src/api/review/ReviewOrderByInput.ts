import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  carId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  reviewText?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
