import React from "react";
import { BsEmojiWink } from "react-icons/bs";
import {BiTime } from "react-icons/bi";
import { FaArrowsAlt } from "react-icons/fa";

import Styles from "./KeyBenefits.module.css";
export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <BsEmojiWink />
          </div>
          <div className={Styles.title}>
            <h5>New public</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            With a club esport, we gain a new target, more people with other
            characteristics that make your business a modern project, and there
            is a market that can attack.
          </p>
        </div>
      </div>
      <div className={Styles.card2}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <FaArrowsAlt />
          </div>
          <div className={Styles.title}>
            <h5>Diversification</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            The traditional sport have a business model that is similar to
            Esports, but it can créate a new model business, and generate a new
            active.
          </p>
        </div>
      </div>
      <div className={Styles.card3}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <BiTime/>
          </div>
          <div className={Styles.title}>
            <h5>Time optimization</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            As an entrepreneur of a sports project, you can have peace of mind,
            that we will take care of creating everything you need, step by
            step, to have an Esport project, working in the best way.
          </p>
        </div>
      </div>
    </div>
  );
};
