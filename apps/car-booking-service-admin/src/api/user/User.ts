import { Booking } from "../booking/Booking";
import { Cart } from "../cart/Cart";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  bookings?: Array<Booking>;
  carts?: Array<Cart>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  reviews?: Array<Review>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
