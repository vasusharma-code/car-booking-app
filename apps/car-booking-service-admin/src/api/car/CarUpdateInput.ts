import { BookingUpdateManyWithoutCarsInput } from "./BookingUpdateManyWithoutCarsInput";
import { ReviewUpdateManyWithoutCarsInput } from "./ReviewUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  bookings?: BookingUpdateManyWithoutCarsInput;
  make?: string | null;
  model?: string | null;
  pricePerDay?: number | null;
  reviews?: ReviewUpdateManyWithoutCarsInput;
  year?: number | null;
};
