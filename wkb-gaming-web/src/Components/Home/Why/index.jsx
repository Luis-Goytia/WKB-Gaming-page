import React from "react";
import Styles from "./Why.module.css";
import {BsChevronDown} from 'react-icons/bs'
export const Why = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.info}>
        <p>Why us?</p>
      </div>
      <div>
        <div className={Styles.info}>
          <div className={Styles.subtitle}>
            <h5>Top Talents</h5>
            <BsChevronDown/>
          </div>
          <p>
            We work with the best and brightest tech talent to ensure you get a
            quality service.
          </p>
        </div>
        <div className={Styles.info}>
          <div className={Styles.subtitle}>
            <h5>Proven experience</h5>
            <BsChevronDown/>
          </div>

          <p>
            We have helped projects and companies to solve their digital needs,
            from streamlining or implementing processes through a
            system/software, to generating a strategy of complete marketing, for
            positioning or maintenance of the brand.
          </p>
        </div>
        <div className={Styles.info}>
          <div className={Styles.subtitle}>
            <h5>Full Focus</h5>
            <BsChevronDown/>
          </div>

          <p>
            We work focused on your vision, your objectives, and we help create
            a plan, ordered to execute it together.
          </p>
        </div>
        <div className={Styles.info}>
          <div className={Styles.subtitle}>
            <h5>Real commitment</h5>
            <BsChevronDown/>
          </div>

          <p>
            Our main objective is that you nd a team willing to help your
            project grow, or join your team to enhance it.
          </p>
        </div>
      </div>
    </div>
  );
};
