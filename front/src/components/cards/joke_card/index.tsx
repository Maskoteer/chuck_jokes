import React from "react";
import "./joke_card.css";
import thunderbolt_image from "../../../assets/assets_Homework_Front-End_02/green-light.png";
import thunderbolt_image2 from "../../../assets/assets_Homework_Front-End_02/green-light@2x.png";
import thunderbolt_image3 from "../../../assets/assets_Homework_Front-End_02/green-light@3x.png";
import arrow_image1 from "../../../assets/assets_Homework_Front-End_02/path-copy-3.png";
import arrow_image2 from "../../../assets/assets_Homework_Front-End_02/path-copy-3@2x.png";
import arrow_image3 from "../../../assets/assets_Homework_Front-End_02/path-copy-3@3x.png";
import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";
import { IJoke } from "../../../models";
interface IProps {
  joke: IJoke;
}
export default function JokeCard({ joke: { id, categories, value } }: IProps) {
  const render_categories = () => {
    if (!Array.isArray(categories) || categories.length == 0)
      return "Uncategorized";
    return categories.map((category: string) => (
      <span key={uuidv4()}>{category} joke </span>
    ));
  };
  return (
    <div className="joke_card_comp">
      <h2 className="joke_card_title">
        {/* <i className="fas fa-bolt joke_card_title_icon"></i> */}
        <img
          src={thunderbolt_image}
          className="thunderbolt_icon"
          alt="thunderbolt icon"
        />
        {render_categories()}
      </h2>
      <p className="joke_card_description">{value}</p>
      <Link to={`/joke/${id}`} className="joke_card_link">
        See stats
        <img
          src={arrow_image1}
          className="right_arrow_icon"
          alt="right arrow icon"
        />
      </Link>
    </div>
  );
}
