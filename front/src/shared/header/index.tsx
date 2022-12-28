import React from "react";
import "./header.css";
import HeroBanner from "./hero";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="header_comp">
      <Navbar />
      <HeroBanner />
    </div>
  );
}
