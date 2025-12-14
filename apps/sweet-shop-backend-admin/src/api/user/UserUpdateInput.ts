import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  passwordHash?: string | null;
  role?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
