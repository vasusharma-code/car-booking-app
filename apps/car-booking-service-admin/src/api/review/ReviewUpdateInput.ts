import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  car?: CarWhereUniqueInput | null;
  rating?: number | null;
  reviewText?: string | null;
  user?: UserWhereUniqueInput | null;
};
