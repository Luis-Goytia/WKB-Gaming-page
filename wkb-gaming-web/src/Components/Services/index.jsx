import React, { Component, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import AppsGames from '../../assets/Services/Gems/AppsGames.svg';
import Esport from '../../assets/Services/Gems/Esport.svg';
import Marketing from '../../assets/Services/Gems/Marketing.svg';
import ProductDesing from '../../assets/Services/Gems/ProductDesing.svg';
import { Footer } from '../Home/Footer';
import {Navbar} from '../Services/Navbar'

export const Services = () => {
  return (
    <div>
      <div><Navbar/></div>
      <Footer/>
    </div>
  );
};
/* export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <img src={AppsGames} />
          </div>
          <div>
            <img src={Esport} />
          </div>
          <div>
            <img src={Marketing} />
          </div>
          <div>
            <img src={ProductDesing} />
          </div>
        </Slider>
      </div>
    );
  }
}
 */