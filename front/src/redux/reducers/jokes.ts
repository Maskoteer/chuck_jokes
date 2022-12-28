import { IJoke } from "../../models";

const jokes_reducer = (state: IJoke[] = [], action: any) => {
  switch (action.type) {
    case "SAVE_JOKES":
      return [...action.data];
    case "REMOVE_JOKES": {
      return [];
    }
    default:
      return state;
  }
};

export default jokes_reducer;
