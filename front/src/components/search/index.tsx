import React, { ChangeEvent, useEffect, useState } from "react";
import "./search.css";
import search_icon_white_1 from "../../assets/assets_Homework_Front-End_01/search-copy.png";
import search_icon_white_2 from "../../assets/assets_Homework_Front-End_01/search-copy@2x.png";
import search_icon_white_3 from "../../assets/assets_Homework_Front-End_01/search-copy@3x.png";
import search_icon_black_1 from "../../assets/assets_Homework_Front-End_02/search-copy.png";
import search_icon_black_2 from "../../assets/assets_Homework_Front-End_02/search-copy@2x.png";
import search_icon_black_3 from "../../assets/assets_Homework_Front-End_02/search-copy@3x.png";
import arrow_image1 from "../../assets/assets_Homework_Front-End_02/path-copy-3.png";
import arrow_image2 from "../../assets/assets_Homework_Front-End_02/path-copy-3@2x.png";
import arrow_image3 from "../../assets/assets_Homework_Front-End_02/path-copy-3@3x.png";
import store from "../../redux/store";
import { get_jokes, get_searched_jokes } from "../../redux/handlers";
import { IJoke } from "../../models";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<IJoke[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!search) {
  //     setSearchResult([]);
  //     return;
  //   }
  //   const result = get_searched_jokes(search);

  //   setSearchResult(result);
  // }, [search]);

  const handle_search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setIsOpen(false);
  };
  const handle_search_reset = () => {
    setSearchResult([]);
    setSearch("");
    setIsOpen(false);
  };
  const handle_click_search = () => {
    setIsOpen(true);
    if (!search) {
      setSearchResult([]);
      return;
    }
    const result = get_searched_jokes(search);
    if (result.length === 1) {
      handle_search_reset();
      navigate(`/joke/${result[0].id}`);
    } else {
      setSearchResult(result);
    }
  };
  const render_result = () => {
    if (!isOpen) return;
    if (!Array.isArray(searchResult) || searchResult.length == 0)
      return (
        <div className="search_result">
          <div className="search_result_container">
            <p className="no_search_found">No jokes found</p>
          </div>
        </div>
      );
    return (
      <div className="search_result">
        <div className="search_result_container">
          {searchResult
            .filter((_, index) => index < 5)
            .map(({ title, categories, id }) => {
              //TODO show thunderbolt icon before category
              return (
                <Link
                  to={`/joke/${id}`}
                  className="search_result_link"
                  onClick={handle_search_reset}
                  key={id}
                >
                  <div className="search_result_element">
                    {categories[0] || "Uncategorized"} jokes: {title}
                  </div>
                </Link>
              );
            })}
          {/* {searchResult.length > 5 && (
            <div className="search_result_element">
              <Link to="/search" className="view_all_search_result">
                View all{" "}
                <img
                  src={arrow_image1}
                  className="right_arrow_icon"
                  alt="right arrow icon"
                />
              </Link>
            </div>
          )} */}
        </div>
      </div>
    );
  };
  return (
    <div className="search_comp">
      <div className="search_comp_input_container">
        <input
          type="text"
          className="search_comp_input"
          placeholder="How can we make you laugh today?"
          value={search}
          onChange={handle_search}
        />
        <img
          src={search ? search_icon_black_1 : search_icon_white_1}
          className="search_comp_input_icon"
          alt="search icon"
          onClick={handle_click_search}
        />
        {/* {search ? (
        ) : (
          <img
            src={search_icon_white_1}
            className="search_comp_input_icon"
            alt="search icon"
          />
        )} */}
      </div>
      {render_result()}
    </div>
  );
}
