// var  randomWords= require('random-words');
import randomWords from "random-words";
import { IPopularity } from "../models";
import { get_joke_number_handler } from "../redux/handlers";

export const get_random_score = () => {
  //get random likes and dislikes between (0 and 300) since the https://api.chucknorris.io/ api's don't provide this information
  const likes = Math.floor(Math.random() * 300);
  const dislikes = Math.floor(Math.random() * 300);
  return {
    likes,
    dislikes,
  };
};

export const generate_random_title = () => {
  return randomWords({ exactly: 1, wordsPerString: 4 }).join();
};

export const get_popularity = (likes: number): IPopularity => {
  if (likes <= 50) return { label: "Popular", color: "#57dbe6" };
  if (likes <= 100) return { label: "Trending", color: "#ffbe5b" };
  return { label: "Epic", color: "#ff5b5b" };
};
