import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
