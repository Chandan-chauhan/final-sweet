import { SweetWhereInput } from "./SweetWhereInput";
import { SweetOrderByInput } from "./SweetOrderByInput";

export type SweetFindManyArgs = {
  where?: SweetWhereInput;
  orderBy?: Array<SweetOrderByInput>;
  skip?: number;
  take?: number;
};
