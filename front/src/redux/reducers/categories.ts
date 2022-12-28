import { ICategory } from "../../models";

const categories_reducer = (state: ICategory[] = [], action: any) => {
  switch (action.type) {
    case "SAVE_CATEGORIES":
      return [...action.data];
    case "REMOVE_CATEGORIES": {
      return [];
    }
    default:
      return state;
  }
};

export default categories_reducer;
