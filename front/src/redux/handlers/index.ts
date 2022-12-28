import { ICategory, IJoke } from "../../models";
import { save_categories_action, save_jokes_action } from "../actions";
import storeConfig from "../store";
const store = storeConfig().store;

export const get_jokes = () => {
  const jokes: IJoke[] = store.getState().jokes;
  return jokes;
};
export const get_top_10_jokes = () => {
  const jokes: IJoke[] = [...store.getState().jokes];
  return jokes
    .sort((joke1, joke2) => joke2.likes - joke1.likes)
    .filter((_, index) => index < 10);
};
export const get_joke_by_id = (id: string) => {
  const jokes: IJoke[] = store.getState().jokes;
  // const joke: IJoke | undefined = jokes.find((joke: IJoke) => joke.id === id);
  const joke_index: number = jokes.findIndex((joke: IJoke) => joke.id === id);
  // const : IJoke | undefined = jokes.find((joke: IJoke) => joke.id === id);
  if (joke_index == -1) return;
  return {
    previous_joke: joke_index > 0 ? jokes[joke_index - 1].id : "",
    joke: jokes[joke_index],
    next_joke: joke_index < jokes.length - 1 ? jokes[joke_index + 1].id : "",
  };
};
export const get_joke_number_handler = (id: string) => {
  const jokes: IJoke[] = store.getState().jokes;
  const index = jokes.findIndex((joke) => joke.id === id);
  return index;
};
export const save_jokes = (data: IJoke[]) => {
  store.dispatch(save_jokes_action(data));
};

export const get_categories = () => {
  const categories: ICategory[] = store.getState().categories;
  return categories;
};
export const get_category_by_name = (category_name: string) => {
  const category: ICategory = store
    .getState()
    .categories.find((category) => category.category_name === category_name);
  return category;
};

export const save_categories = (data: ICategory[]) => {
  store.dispatch(save_categories_action(data));
};

export const like_joke = (joke_id: string) => {
  const jokes: IJoke[] = store.getState().jokes;
  const joke = jokes.find((joke) => joke.id === joke_id);
  if (!joke) return false;
  joke.likes++;
  store.dispatch(save_jokes_action(jokes));
  return true;
};
export const dislike_joke = (joke_id: string) => {
  const jokes: IJoke[] = store.getState().jokes;
  const joke = jokes.find((joke) => joke.id === joke_id);
  if (!joke) return false;
  joke.dislikes++;
  store.dispatch(save_jokes_action(jokes));
  return true;
};

export const get_searched_jokes = (search: string) => {
  const jokes: IJoke[] = store.getState().jokes;
  return jokes.filter((joke) =>
    joke.title.toLowerCase().includes(search.toLowerCase())
  );
};
