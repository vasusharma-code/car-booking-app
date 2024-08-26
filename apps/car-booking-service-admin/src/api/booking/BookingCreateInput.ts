import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  car?: CarWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
