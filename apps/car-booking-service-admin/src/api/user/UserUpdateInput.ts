import { BookingUpdateManyWithoutUsersInput } from "./BookingUpdateManyWithoutUsersInput";
import { CartUpdateManyWithoutUsersInput } from "./CartUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  address?: string | null;
  bookings?: BookingUpdateManyWithoutUsersInput;
  carts?: CartUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
