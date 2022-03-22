import React from "react";
import {
  HeroBanner,
  ProductsBanner,
  DinosaursBanner,
  QuoteBanner,
  MovieLogosBanner,
} from "../../components";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="home-screen">
      <HeroBanner />

      <ProductsBanner title="Limited Editions" />

      <DinosaursBanner />

      <ProductsBanner title="Most Popular" />

      <QuoteBanner />

      <MovieLogosBanner />
    </div>
  );
}

export { HomeScreen };
