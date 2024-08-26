import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartCreateInput = {
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
