import React from 'react';
import Styles from './Header.module.css';
import Logo from '../../../assets/HOME/WKB LOGOS/Símbolo Walker Bear.svg';
import { BsChevronDown } from 'react-icons/bs';
import { Slider } from './Slider';
import World from '../../Experience/World';
export const Header = () => {
  return (
    <div>
      <div className="home">
        <div className={Styles.World}>
          <World />
        </div>
      </div>
    </div>
  );
};
