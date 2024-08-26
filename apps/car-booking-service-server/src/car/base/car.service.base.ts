/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Car as PrismaCar,
  Booking as PrismaBooking,
  Review as PrismaReview,
} from "@prisma/client";

export class CarServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CarCountArgs, "select">): Promise<number> {
    return this.prisma.car.count(args);
  }

  async cars(args: Prisma.CarFindManyArgs): Promise<PrismaCar[]> {
    return this.prisma.car.findMany(args);
  }
  async car(args: Prisma.CarFindUniqueArgs): Promise<PrismaCar | null> {
    return this.prisma.car.findUnique(args);
  }
  async createCar(args: Prisma.CarCreateArgs): Promise<PrismaCar> {
    return this.prisma.car.create(args);
  }
  async updateCar(args: Prisma.CarUpdateArgs): Promise<PrismaCar> {
    return this.prisma.car.update(args);
  }
  async deleteCar(args: Prisma.CarDeleteArgs): Promise<PrismaCar> {
    return this.prisma.car.delete(args);
  }

  async findBookings(
    parentId: string,
    args: Prisma.BookingFindManyArgs
  ): Promise<PrismaBooking[]> {
    return this.prisma.car
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bookings(args);
  }

  async findReviews(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<PrismaReview[]> {
    return this.prisma.car
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviews(args);
  }
}
