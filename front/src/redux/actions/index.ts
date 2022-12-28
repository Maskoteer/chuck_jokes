import { ICategory, IJoke } from "../../models";

export const save_jokes_action = (data: IJoke[]) => {
  return {
    type: "SAVE_JOKES",
    data,
  };
};
export const save_categories_action = (data: ICategory[]) => {
  return {
    type: "SAVE_CATEGORIES",
    data,
  };
};
