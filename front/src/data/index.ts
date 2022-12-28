import { ICategory, IJoke } from "../models";

export const category_colors: string[] = [
  "#ff5b5b",
  "#57e690",
  "#ff915b",
  "#57dbe6",
  "#d0ba93",
  "#ffbe5b",
  "#8fe360",
  "#ffdf5b",
];

// export const get_all_categories = (jokes: IJoke[]) => {
//   const categories = jokes.reduce((accum: Set<string>, joke) => {
//     joke.categories.forEach((category) => accum.add(category));
//     return accum;
//   }, new Set<string>());
//   return Array.from(categories).map((category, index) => {
//     return {
//       category_name: category,
//       category_color: category_colors[index % category_colors.length],
//     };
//   });
// };
