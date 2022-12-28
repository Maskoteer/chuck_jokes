import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../hamburger_menu";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav_comp">
      <ul className="nav_list">
        <li className="nav_item">
          <HamburgerMenu />
        </li>
        <li className="nav_item">
          <Link to={"/"}>so funktioniert's</Link>
        </li>
        <li className="nav_item">
          <Link to={"/"}>sonderangebote</Link>
        </li>
        <li className="nav_item nav_item_dropdown">
          <Link to={"/"} className="nav_item_dropdown_link">
            <i className="fas fa-user user_icon"></i>
            <span>mein bereich</span>
            <i className="fas fa-caret-down dropdown_icon"></i>
          </Link>
          <div className="dropdown_container">
            <ul className="dropdown">
              <li className="dropdown_item">My published jokes</li>
              <li className="dropdown_item">My saved jokes</li>
              <li className="dropdown_item">Account information</li>
              <li className="dropdown_item">publish new joke</li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
