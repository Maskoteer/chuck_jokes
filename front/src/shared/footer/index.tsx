import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer_comp">
      <div className="footer_container">
        <div className="footer_content">
          <h2 className="footer_content_text">
            got jokes? get paid for submitting!
          </h2>
          <Link to={"/"} className="footer_content_link">
            submit joke
          </Link>
        </div>
      </div>
    </div>
  );
}
