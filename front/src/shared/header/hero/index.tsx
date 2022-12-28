import React from "react";
import Search from "../../../components/search";
import "./hero.css";
export default function HeroBanner() {
  return (
    <div className="hero_banner">
      <h1 className="hero_banner_title">The joke</h1>
      <h3 className="hero_banner_subtitle">Daily laughs for you and yours</h3>
      <Search />
    </div>
  );
}
