import React from "react";
import "./MovieLogosBanner.css";

function MovieLogosBanner() {
  return (
    <div className="movie-list-row home-screen-row">
      {/* Movie Logos*/}
      <h1 className="home-sub-heading">INSPIRED BY</h1>
      <img
        src="/assets/banner/movie logos/Jurassic-Park-Logo.png"
        alt="Jurassic-Park-Logo"
        className="movie-logo"
      />
      <img
        src="/assets/banner/movie logos/The-Lost-World-Jurassic-Park-Logo.png"
        alt="The-Lost-World-Jurassic-Park-Logo"
        className="movie-logo"
      />
      <img
        src="/assets/banner/movie logos/Jurassic-Park-III-Logo.png"
        alt="Jurassic-Park-III-Logo"
        className="movie-logo"
      />
      <img
        src="/assets/banner/movie logos/Jurassic-World-Logo.png"
        alt="Jurassic-World-Logo"
        className="movie-logo"
      />
      <img
        src="/assets/banner/movie logos/Jurassic-World-Fallen-Kingdom-Logo.png"
        alt="Jurassic-World-Fallen-Kingdom-Logo"
        className="movie-logo"
      />
    </div>
  );
}

export { MovieLogosBanner };
