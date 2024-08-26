import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
