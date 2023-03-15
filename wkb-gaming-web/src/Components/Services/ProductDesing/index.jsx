import React from "react";
import Slider from "react-slick";
import { UI_UXDesing } from "./UI_UXDesing";
import { StartupManagment } from "./StartupManagment";
import { ProductInterface } from "./ProductInterface";
import { Business } from "./Business";
import { Footer } from '../../Home/Footer';
import {Navbar} from '../../Services/Navbar'
export const ProductDesing = () => {
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
      <Navbar/>
      <div>
        <h1>Digital Product Design</h1>
      </div>
      <br />
      <div></div>
      <div>
        <Slider {...settings}>
          <div>
            <Business />
          </div>
          <div>
            <UI_UXDesing />
          </div>
          <div>
            <ProductInterface />
          </div>
          <div>
            <StartupManagment />
          </div>
        </Slider>
      <br />
      </div>
      <Footer/>
    </div>
  );
};
