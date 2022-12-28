import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hamburger_menu.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle_modal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger_menu_comp">
      <i className="fas fa-bars hamburger_button" onClick={toggle_modal}></i>
      <div className={`hamburger_menu_container ${isOpen ? "show" : ""}`}>
        <div className="hamburger_menu_content">
          <i
            className="fas fa-bars hamburger_button"
            onClick={toggle_modal}
          ></i>
          <div className="hamburger_menu_links">
            <ul className="nav_list">
              <li className="nav_item">
                <Link
                  to={"/"}
                  onClick={(event) => {
                    setIsOpen(false);
                  }}
                >
                  so funktioniert's
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to={"/"}
                  onClick={(event) => {
                    setIsOpen(false);
                  }}
                >
                  sonderangebote
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to={"/"}
                  onClick={(event) => {
                    setIsOpen(false);
                  }}
                >
                  My published jokes
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to={"/"}
                  onClick={(event) => {
                    setIsOpen(false);
                  }}
                >
                  My saved jokes
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to={"/"}
                  onClick={(event) => {
                    setIsOpen(false);
                  }}
                >
                  Account information
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to={"/"}
                  onClick={(event) => {
                    setIsOpen(false);
                  }}
                >
                  publish new joke
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
