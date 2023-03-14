import React from "react";
import Styles from './Problem.module.css'
export const Problem = () => {
  return (
    <div>
      <div className={Styles.description}>
        <p>
          Unity and Unreal reach over 3 billion players worldwide, accounting
          for more than 70% of the market share. Our devs excel at both.
        </p>
      </div>
      <div className={Styles.description}>
        <p>
          Game development as an industry with its popularity soaring has
          already grasped world’s interest and attention. People all over the
          world play video games and literally enjoy spending their money here.
          In the year 2020 gaming industry alone was a bigger moneymaker than
          film and music industries combined
        </p>
      </div>
    </div>
  );
};
