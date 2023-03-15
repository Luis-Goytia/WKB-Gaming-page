import React from "react";
import Slider from "react-slick";
import { Game } from "./Game";
import { MobileApp } from "./MobileApp";
import { ProductDesign } from "./ProductDesign";
import { WebEcomerce } from "./WebEcomerce";
import Styles from "./AppGames.module.css";

export const AppGames = () => {
  var settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div>
      <div>
        <h1>App & Games Development</h1>
      </div>
      <br />
      <div></div>
      <div>
        <Slider {...settings}>
          <div>
            <ProductDesign />
          </div>
          <div>
            <MobileApp />
          </div>
          <div>
            <WebEcomerce />
          </div>
          <div>
            <Game />
          </div>
        </Slider>
        <br />
      </div>
    </div>
  );
};
