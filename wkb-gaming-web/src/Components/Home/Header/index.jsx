import React from 'react';
import Styles from './Header.module.css';
import Logo from '../../../assets/HOME/WKB LOGOS/Símbolo Walker Bear.svg';
import { BsChevronDown } from 'react-icons/bs';
import { Slider } from './Slider';
export const Header = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <div>
          <p>We make</p>
        </div>
        <div>
          <Slider />
        </div>
        <div>for you project</div>
      </div>
      <div>
        <BsChevronDown />
      </div>
    </div>
  );
};
