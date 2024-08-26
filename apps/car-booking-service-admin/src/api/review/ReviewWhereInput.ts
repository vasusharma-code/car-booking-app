import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  car?: CarWhereUniqueInput;
  id?: StringFilter;
  rating?: IntNullableFilter;
  reviewText?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
