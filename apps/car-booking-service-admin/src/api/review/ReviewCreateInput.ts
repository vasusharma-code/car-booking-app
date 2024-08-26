import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  car?: CarWhereUniqueInput | null;
  rating?: number | null;
  reviewText?: string | null;
  user?: UserWhereUniqueInput | null;
};
