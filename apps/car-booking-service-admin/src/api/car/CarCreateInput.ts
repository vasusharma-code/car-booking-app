import { BookingCreateNestedManyWithoutCarsInput } from "./BookingCreateNestedManyWithoutCarsInput";
import { ReviewCreateNestedManyWithoutCarsInput } from "./ReviewCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  bookings?: BookingCreateNestedManyWithoutCarsInput;
  make?: string | null;
  model?: string | null;
  pricePerDay?: number | null;
  reviews?: ReviewCreateNestedManyWithoutCarsInput;
  year?: number | null;
};
