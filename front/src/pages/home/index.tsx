import React, { useEffect, useState } from "react";
import "./home.css";
import JokeCard from "../../components/cards/joke_card";
import CategoryButton from "../../components/category_button";
import { ICategory, IJoke } from "../../models";
import { v4 as uuidv4 } from "uuid";
import { get_all_categories, get_all_jokes } from "../../data/calls";
import arrow_down_1 from "../../assets/assets_Homework_Front-End_01/arrow_down.png";
import arrow_down_2 from "../../assets/assets_Homework_Front-End_01/arrow_down@2x.png";
import arrow_down_3 from "../../assets/assets_Homework_Front-End_01/arrow_down@3x.png";
import no_data_image from "../../assets/extra/no_data.svg";
import error_data_image from "../../assets/extra/error_get_data.svg";
import { get_jokes } from "../../redux/handlers";
import ViewAllCategoryButton from "../../components/viewl_all_category_button";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<
    ICategory | undefined
  >();
  const [jokes, setJokes] = useState<IJoke[]>();
  const [jokes_categories, setJokesCategories] = useState<ICategory[]>();
  const [jokes_error, setJokesError] = useState<string>();
  const [jokes_categories_error, setJokesCategoriesError] = useState<string>();
  const [isDataFetched, setIsDataFetched] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const per_page = 6;
  useEffect(() => {
    get_all_jokes(
      (data: IJoke[]) => {
        setJokes(data);
        setIsDataFetched(true);
      },
      (error: string) => {
        setJokesError(error);
      }
    );
    get_all_categories(
      (data: ICategory[]) => {
        setJokesCategories(data);
      },
      (error: string) => {
        setJokesCategoriesError(error);
      }
    );
  }, []);

  const handle_select_catgory = (category: ICategory) => {
    setSelectedCategory(category);
    setPage(1);
    const filtered_jokes = get_jokes().filter((joke) =>
      joke.categories.includes(category.category_name)
    );
    setJokes(filtered_jokes);
  };
  const handle_reset_search = () => {
    setSelectedCategory(undefined);
    setPage(1);
    const filtered_jokes = get_jokes();
    setJokes(filtered_jokes);
  };

  const render_jokes_catgories = () => {
    if (!Array.isArray(jokes_categories) || jokes_categories.length == 0)
      return <></>; //TODO show no categories found or error
    return (
      <>
        {jokes_categories.map((category) => (
          <CategoryButton
            key={uuidv4()}
            category={category}
            selected_category={selectedCategory?.category_name}
            handle_select_catgory={handle_select_catgory}
          />
        ))}
        <ViewAllCategoryButton
          selected_category={selectedCategory?.category_name}
          handle_reset_search={handle_reset_search}
        />
      </>
    );
    //TODO add view all button
  };
  const render_jokes = () => {
    if (!isDataFetched) return;
    if (jokes_error)
      return (
        <div className="no_data_found">
          <img
            src={error_data_image}
            className="no_data_image"
            alt="error getting data"
          />
          <p className="no_data_info">Error retrieving jokes</p>
        </div>
      );
    if (!Array.isArray(jokes) || jokes.length == 0)
      return (
        <div className="no_data_found">
          <img src={no_data_image} className="no_data_image" alt="no data" />
          <p className="no_data_info">
            No jokes Found{" "}
            {selectedCategory &&
              `in this category: ${selectedCategory.category_name} jokes`}
          </p>
        </div>
      );
    return (
      <div className="jokes_container">
        {jokes.slice(0, page * per_page).map((joke) => (
          <div className="joke_item" key={joke.id}>
            <JokeCard joke={joke} />
          </div>
        ))}
      </div>
    );
  };
  const can_view_more = () => {
    return Array.isArray(jokes) && jokes.length > page * per_page;
  };
  const view_more = () => {
    setPage(page + 1);
  };
  return (
    <main className="home_page">
      <div className="jokes_categories">{render_jokes_catgories()}</div>
      <span
        className="selected_catgory"
        style={{ background: selectedCategory?.category_color }}
      >
        {selectedCategory?.category_name} jokes
      </span>
      {render_jokes()}
      {can_view_more() && (
        <button className="view_more_jokes_button" onClick={view_more}>
          view more{" "}
          <img src={arrow_down_1} className="view_more_icon" alt="arrow down" />
        </button>
      )}
    </main>
  );
}
