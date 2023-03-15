import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiUserPlus } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import Styles from "./KeyBenefits.module.css";
export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <BiUserPlus/>
          </div>
          <div className={Styles.title}>
            <h5>Customer satisfaction</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            An outstanding UI/UX design should be interactive and navigable
            engaging content that makes people stay longer on your site.
          </p>
        </div>
      </div>
      <div className={Styles.card2}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <TbUsers />
          </div>
          <div className={Styles.title}>
            <h5>Attracts New Customers on the Platform</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            By attending to the needs of consumers, you’ll be attracting more
            prospects who’ll want to convert. With outstanding UI/UX, the right
            approach will pique customer interest and eventually lead to
            fruitful conversions.
          </p>
        </div>
      </div>
      <div className={Styles.card3}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <RiMoneyDollarCircleLine />
          </div>
          <div className={Styles.title}>
            <h5>Reduces Costs</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Integrating an optimized UI/UX design into the development process
            will help you address usability issues beforehand and avoid extra
            re-design costs. Good usability testing software may help plan for a
            scalable, flexible design that grows as your customer base
            increases.
          </p>
        </div>
      </div>
    </div>
  );
};
