import React from "react";
import { ICategory } from "../../models";
import "./view_all_category_button.css";
import arrow_down_1 from "../../assets/assets_Homework_Front-End_01/arrow_down.png";
import arrow_down_2 from "../../assets/assets_Homework_Front-End_01/arrow_down@2.png";
import arrow_down_3 from "../../assets/assets_Homework_Front-End_01/arrow_down@3.png";
interface IProps {
  selected_category: string | undefined;
  handle_reset_search: () => void;
}

export default function ViewAllCategoryButton({
  selected_category,
  handle_reset_search,
}: IProps) {
  return (
    <div className="category_btn_container">
      <button
        className={`category_btn view_all_category_button ${
          !selected_category ? "selected" : ""
        }`}
        onClick={() => handle_reset_search()}
      >
        view all
        <img
          src={arrow_down_1}
          className="category_btn_arrow_down"
          alt="arrow down"
        />
      </button>
    </div>
  );
}
