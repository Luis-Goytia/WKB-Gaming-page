import React from "react";
import Styles from "./KeyBenefits.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { RiMoneyDollarCircleLine, RiShieldCheckLine } from "react-icons/ri";
import { TfiTimer } from "react-icons/tfi";

export const KeyBenefits = () => {
  return (
    <div>
      <div className={Styles.card}>
        <div>
          <div className={Styles.icon}>
            <AiOutlineEye />
          </div>
          <div className={Styles.title}>
            <h5>Immersive Focus</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            We spend two days together in an intensive session so that we can
            reach a state of absolute focus and dig down to the core of the
            product’s value proposition.
          </p>
        </div>
      </div>

      <div className={Styles.card}>
        <div>
          <div className={Styles.icon}>
            <RiShieldCheckLine />
          </div>
          <div className={Styles.title}>
            <h5>Reduced Risk</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            We don’t want to help you build a full-featured product only to
            discover the market doesn’t want it. We want you to succeed. That’s
            why we focus on the vital features needed to test your product’s
            main assumptions – leaving unnecessary features behind, or saving
            them for later iterations.
          </p>
        </div>
      </div>

      <div className={Styles.card}>
        <div>
          <div className={Styles.icon}>
            <RiMoneyDollarCircleLine />
          </div>
          <div className={Styles.title}>
            <h5>Reduced Cost</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            By cutting down the feature list to the essential core that is
            needed to prove your product’s assumptions, you’re not only reducing
            the risk but also reducing the cost. You will spend less on product
            development and at the initial iteration phase – fewer features
            equals less maintenance.
          </p>
        </div>
      </div>

      <div className={Styles.card}>
        <div>
          <div className={Styles.icon}>
            <TfiTimer />
          </div>
          <div className={Styles.title}>
            <h5>Timing decision</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Picking the right company is a key business decision and we want to
            make sure we are the right choice for you. You get to know us before
            committing to the full project.
          </p>
        </div>
      </div>
    </div>
  );
};
