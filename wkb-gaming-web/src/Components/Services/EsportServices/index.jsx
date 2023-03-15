import React from 'react';
import Styles from './EsportServices.module.css';
import Slider from 'react-slick';
import { ClubEsport } from './ClubEsport';
import { EsportConsulting } from './EsportConsulting';
import { EsportDigital } from './EsportDigital';
import { EventManagement } from './EventManagement';
import { Navbar } from '../Navbar';
import { Footer } from '../../Home/Footer';
export const EsportServices = () => {
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
      <Navbar/>
      <div>
        <h1>e-Sport Services</h1>
      </div>
      <br />
      <div></div>
      <div>
        <Slider {...settings}>
          <div>
            <EsportConsulting />
          </div>
          <div>
            <ClubEsport />
          </div>
          <div>
            <EsportDigital />
          </div>
          <div>
            <EventManagement />
          </div>
        </Slider>
        <br />
      </div>
      <Footer/>
    </div>
  );
};
