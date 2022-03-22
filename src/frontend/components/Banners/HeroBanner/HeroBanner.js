import React from "react";
import "./HeroBanner.css"

function HeroBanner() {
  return (
    <div className="hero home-screen-row">
      {/* Hero Image */}
      <img
        src="/assets/Banner/Hero/Jurassic-World-Gate.jpg"
        alt="jurassic-world"
        className="hero-img"
      />
      {/* Hero Titles */}
      <div className="hero-main">
        <h1 className="hero-img-subtitle">Brought to you By</h1>
        <h1 className="hero-img-subtitle-2">Camp Cretaceous</h1>
      </div>
    </div>
  );
}

export {HeroBanner}