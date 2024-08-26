import { Car } from "../car/Car";
import { User } from "../user/User";

export type Booking = {
  car?: Car | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
