import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CarWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  pricePerDay?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
  year?: IntNullableFilter;
};
