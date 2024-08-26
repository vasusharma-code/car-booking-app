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
  Review as PrismaReview,
  Car as PrismaCar,
  User as PrismaUser,
} from "@prisma/client";

export class ReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReviewCountArgs, "select">): Promise<number> {
    return this.prisma.review.count(args);
  }

  async reviews(args: Prisma.ReviewFindManyArgs): Promise<PrismaReview[]> {
    return this.prisma.review.findMany(args);
  }
  async review(
    args: Prisma.ReviewFindUniqueArgs
  ): Promise<PrismaReview | null> {
    return this.prisma.review.findUnique(args);
  }
  async createReview(args: Prisma.ReviewCreateArgs): Promise<PrismaReview> {
    return this.prisma.review.create(args);
  }
  async updateReview(args: Prisma.ReviewUpdateArgs): Promise<PrismaReview> {
    return this.prisma.review.update(args);
  }
  async deleteReview(args: Prisma.ReviewDeleteArgs): Promise<PrismaReview> {
    return this.prisma.review.delete(args);
  }

  async getCar(parentId: string): Promise<PrismaCar | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .car();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
