import React from 'react';
import Styles from './EsportServices.module.css'
import { ClubEsport } from './ClubEsport'
import { EsportConsulting } from './EsportConsulting'
import { EsportDigital } from './EsportDigital'
import {EventManagement} from './EventManagement'
export const EsportServices  = () => {
  var settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div>
      <div>
        <h1>Esport Services</h1>
      </div>
      <br />
      <div></div>
      <div>
        <Slider {...settings}>
          <div>
            <EsportConsulting/>
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
      </div>
    </div>
    )
}