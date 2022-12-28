import React, { useEffect, useState } from "react";
import "./joke.css";
import like_img_1 from "../../assets/assets_Homework_Front-End_02/like.png";
import like_img_2 from "../../assets/assets_Homework_Front-End_02/like@2.png";
import like_img_3 from "../../assets/assets_Homework_Front-End_02/like@3.png";
import dislike_img_1 from "../../assets/assets_Homework_Front-End_02/dislike.png";
import dislike_img_2 from "../../assets/assets_Homework_Front-End_02/dislike@2.png";
import dislike_img_3 from "../../assets/assets_Homework_Front-End_02/dislike@3.png";

import arrow_left_1 from "../../assets/assets_Homework_Front-End_02/arrow-left.png";
import arrow_left_2 from "../../assets/assets_Homework_Front-End_02/arrow-left@2.png";
import arrow_left_3 from "../../assets/assets_Homework_Front-End_02/arrow-left@3.png";
import arrow_right_1 from "../../assets/assets_Homework_Front-End_02/arrow-right.png";
import arrow_right_2 from "../../assets/assets_Homework_Front-End_02/arrow-right@2.png";
import arrow_right_3 from "../../assets/assets_Homework_Front-End_02/arrow-right@3.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { UNCATEGORIZED_JOKE } from "../../constants";
import { ICategory, IJoke, IPopularity } from "../../models";
import {
  dislike_joke,
  get_category_by_name,
  get_jokes,
  get_joke_by_id,
  get_joke_number_handler,
  get_top_10_jokes,
  like_joke,
} from "../../redux/handlers";
import { get_popularity } from "../../utils";
import { v4 as uuidv4 } from "uuid";

export default function Joke() {
  const [joke, setJoke] = useState<IJoke>();
  const [previous, setPrevious] = useState<string>();
  const [next, setNext] = useState<string>();
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [id, setId] = useState<string | undefined>(useParams()?.id);
  const [top10, setTop10] = useState<IJoke[]>(get_top_10_jokes());
  const location = useLocation();
  const params = useParams();

  //   const navigate = useNavigate();
  useEffect(() => {
    setId(params?.id);
    handle_get_joke(params?.id);
  }, [location.pathname]);
  const handle_get_joke = (joke_id: string = "") => {
    const joke_data = get_joke_by_id(joke_id);
    if (!joke_data) return setIsDataFetched(true);
    setJoke({ ...joke_data.joke });
    setPrevious(joke_data.previous_joke);
    setNext(joke_data.next_joke);
  };
  const get_category_color = (category_name: string) => {
    return get_category_by_name(category_name)?.category_color;
  };
  const render_categories = () => {
    if (!joke) return;
    if (!Array.isArray(joke.categories) || joke.categories.length == 0)
      return (
        <span className="joke_card_category uncategorized">
          {UNCATEGORIZED_JOKE} jokes{" "}
        </span>
      );
    return joke.categories.map((category) => {
      return (
        <span
          className="joke_card_category"
          style={{ background: get_category_color(category) }}
          key={uuidv4()}
        >
          {category} jokes{" "}
        </span>
      );
    });
  };

  const render_popularity = () => {
    if (!joke) return;
    const popularity: IPopularity = get_popularity(joke?.likes);
    return (
      <span
        className="joke_card_popularity"
        style={{ color: popularity.color }}
      >
        {popularity.label}
      </span>
    );
  };
  const render_joke_number = () => {
    const index = get_joke_number_handler(joke?.id || "");
    return `No #${index + 1}`;
  };

  const handle_like_joke = () => {
    if (!joke) return;
    const is_success = like_joke(joke.id);
    if (is_success) {
      handle_get_joke(id);
    } else alert("failed");
  };
  const handle_dislike_joke = () => {
    if (!joke) return;
    const is_success = dislike_joke(joke.id);
    if (is_success) {
      handle_get_joke(id);
    } else alert("failed");
  };
  const render_top_10 = () => {
    if (!Array.isArray(top10) || top10.length == 0) return;
    return (
      <>
        <h2 className="top_10_title">The top 10 jokes this week</h2>
        {top10.map(({ title, id }) => {
          return (
            <Link to={`/joke/${id}`} className="top_10_joke" key={id}>
              {title}
            </Link>
          );
        })}
      </>
    );
  };
  return (
    <main className="joke_page">
      <Link to="/" className="return_button_link">
        <button className="return_button">
          <img src={arrow_left_1} className="joke_arrow_icon" alt="previous" />

          <svg
            width="129"
            height="120"
            viewBox="0 0 129 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2872 6.72218C36.0042 -11.8971 108.735 14.0793 126 36.5001C143.265 58.9208 56.9403 126.661 29.9999 118.5C3.05954 110.339 -11.4298 25.3415 12.2872 6.72218Z"
              fill="#303030"
            />
          </svg>
        </button>
      </Link>
      <div className="main_container">
        <div className="joke_content">
          <div className="joke_card">
            <div className="joke_card_top_info">
              <span className="joke_card_category_container">
                {render_categories()}
              </span>
              {render_popularity()}
            </div>
            <div className="joke_card_title_container">
              <h1 className="joke_card_title">{joke?.title}</h1>
              <p className="joke_card_title_separator"></p>
              <p className="joke_card_rank">{render_joke_number()}</p>
            </div>
            <p className="joke_card_description">{joke?.value}</p>
          </div>
          <div className="joke_bottom_actions">
            <div className="joke_score_action">
              <div className="joke_score">
                <button
                  className="joke_score_content joke_score_like_content"
                  onClick={handle_like_joke}
                >
                  <img
                    src={like_img_1}
                    className="joke_score_like_icon"
                    alt="like"
                  />
                </button>
                <p className="joke_score_count joke_score_count_likes">
                  {joke?.likes}
                </p>
              </div>
              <div className="joke_score">
                <button
                  className="joke_score_content joke_score_dislike_content"
                  onClick={handle_dislike_joke}
                >
                  <img
                    src={dislike_img_1}
                    className="joke_score_dislike_icon"
                    alt="dislike"
                  />
                </button>
                <p className="joke_score_count joke_score_count_dislikes">
                  {joke?.dislikes}
                </p>
              </div>
            </div>
            <div className="pagination_action">
              {previous && (
                <Link
                  to={`/joke/${previous}`}
                  className="joke_pagination previous_joke"
                >
                  <img
                    src={arrow_left_1}
                    className="joke_arrow_icon"
                    alt="previous"
                  />
                  Prev joke
                </Link>
              )}
              {next && (
                <Link
                  to={`/joke/${next}`}
                  className="joke_pagination next_joke"
                >
                  Next joke
                  <img
                    src={arrow_right_1}
                    className="joke_arrow_icon"
                    alt="next"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
        <aside className="top_jokes_container">
          <div className="top_jokes_content">{render_top_10()}</div>
        </aside>
      </div>
    </main>
  );
}
