import React from 'react';
import Styles from './Marketing.module.css';
import Slider from 'react-slick';
import { Branding } from './Branding';
import { ContentMarketing } from './ContentMarketing';
import { GraphicDesing } from './GraphicDesing';
import { SocialMedia } from './SocialMedia';
import { Footer } from '../../Home/Footer';
import { Navbar } from '../../Services/Navbar';

export const Marketing = () => {
  var settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div>
      <Navbar />
      <div>
        <h1>Marketing & Comunication</h1>
      </div>
      <br />
      <div></div>
      <div>
        <Slider {...settings}>
          <div>
            <Branding />
          </div>
          <div>
            <ContentMarketing />
          </div>
          <div>
            <GraphicDesing />
          </div>
          <div>
            <SocialMedia />
          </div>
        </Slider>
        <br />
      </div>
      <Footer />
    </div>
  );
};
