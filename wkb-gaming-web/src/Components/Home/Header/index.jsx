import React from 'react';
import Styles from './Header.module.css';
import World from '../../Experience/World';
export const Header = () => {
  return (
    <div>
      <div>
        <div >
          <World className={Styles.world}/>
        </div>
      </div>
    </div>
  );
};
