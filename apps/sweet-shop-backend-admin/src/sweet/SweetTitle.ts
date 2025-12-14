import { Sweet as TSweet } from "../api/sweet/Sweet";

export const SWEET_TITLE_FIELD = "name";

export const SweetTitle = (record: TSweet): string => {
  return record.name?.toString() || String(record.id);
};
