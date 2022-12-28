import React from "react";
import { ICategory } from "../../models";
import "./category_button.css";

interface IProps {
  category: ICategory;
  selected_category: string | undefined;
  handle_select_catgory: (category: ICategory) => void;
}

export default function CategoryButton({
  category,
  selected_category,
  handle_select_catgory,
}: IProps) {
  return (
    <div className="category_btn_container">
      <button
        className={`category_btn ${
          category.category_name === selected_category ? "selected" : ""
        }`}
        style={{ background: category.category_color }}
        onClick={() => handle_select_catgory(category)}
      >
        {category.category_name} jokes
      </button>
    </div>
  );
}
