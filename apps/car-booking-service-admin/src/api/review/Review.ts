import { Car } from "../car/Car";
import { User } from "../user/User";

export type Review = {
  car?: Car | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  reviewText: string | null;
  updatedAt: Date;
  user?: User | null;
};
