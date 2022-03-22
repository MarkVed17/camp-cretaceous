import React from "react";
import "./QuoteBanner.css";

function QuoteBanner() {
  return (
    <div className="quote-container home-screen-row">
      {/* Quote */}
      <div className="home-page-quote">
        <blockquote className="quote-border">
          "God Creates Dinosaurs. God Destroys Dinosaurs. God Creates Man. Man
          Destroys God. Man Creates Dinosaurs."
          <br />
          <span className="quote-writer gray-text">
            <span>&#8212;</span>Dr. Ian Malcolm
          </span>
        </blockquote>
      </div>
    </div>
  );
}

export { QuoteBanner };
