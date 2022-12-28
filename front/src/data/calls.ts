import axios from "axios";
import { category_colors } from ".";
import { IAllJokes, ICategory, IJoke } from "../models";
import { save_categories, save_jokes } from "../redux/handlers";
import { generate_random_title, get_random_score } from "../utils";
import * as Endpoints from "./endpoints";
export const get_all_jokes = (
  handle_success: (data: IJoke[]) => void,
  handle_fail: (message: string) => void
) => {
  axios
    .get(Endpoints.all_jokes)
    .then(({ data }: { data: IAllJokes }) => {
      let score, title;
      const result = data.result.map((elem: IJoke) => {
        score = get_random_score();
        title = generate_random_title();
        return { ...elem, likes: score.likes, dislikes: score.dislikes, title };
      });
      handle_success(result);
      save_jokes(result);
    })
    .catch((error) => {
      handle_fail(error.message);
    });
};
export const get_all_categories = (
  handle_success: (categories: ICategory[]) => void,
  handle_fail: (message: string) => void
) => {
  axios
    .get(Endpoints.all_categories)
    .then(({ data }: { data: string[] }) => {
      const result = data.map((element: string, index: number) => {
        return {
          category_name: element,
          category_color: category_colors[index % category_colors.length],
        };
      });
      handle_success(result);
      save_categories(result);
    })
    .catch((error) => {
      handle_fail(error.message);
    });
};
