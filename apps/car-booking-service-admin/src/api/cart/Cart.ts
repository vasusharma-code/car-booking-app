import { User } from "../user/User";

export type Cart = {
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
