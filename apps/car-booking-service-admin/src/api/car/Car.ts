import { Booking } from "../booking/Booking";
import { Review } from "../review/Review";

export type Car = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  make: string | null;
  model: string | null;
  pricePerDay: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
  year: number | null;
};
