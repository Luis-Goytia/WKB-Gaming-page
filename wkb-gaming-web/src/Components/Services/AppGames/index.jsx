import React from 'react';
import Slider from 'react-slick'
import { Game } from './Game'
import { MobileApp } from './MobileApp'
import { ProductDesign } from './ProductDesign'
import Styles from './AppGames.module.css'

export const AppGames = () => {
    var settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };
    return (
        <div>
            <div></div>
            <div>
        <h2>Adaptive height</h2>
        <Slider {...settings}>
          <div>
            <Game/>
          </div>
          <div>
            <MobileApp/>
          </div>
          <div>
            <ProductDesign/>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
        </div>
    )
}