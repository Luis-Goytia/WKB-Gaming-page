import React from "react";
import { TbAtom } from "react-icons/tb";
import { MdMoreTime } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import Styles from './KeyBenefits.module.css'
export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <TbAtom />
          </div>
          <div className={Styles.title}>
            <h5>Access to Advanced Technology</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Game development outsourcing can give your business access to expert
            developers with top-of-the-line equipment for a fraction of the
            cost. You can get the benefits of cutting-edge gaming technology
            without sacrificing a large percentage of your operating Budget
          </p>
        </div>
        </div>
        <div className={Styles.card2}>
          <div className={Styles.header}>
            <div className={Styles.icon2}>
              <BiWallet />
            </div>
            <div className={Styles.title}>
              <h5>Financial Savings</h5>
            </div>
          </div>
          <div className={Styles.description}>
            <p>
              Cost-efficiency is one of the most commonly cited advantages of
              outsourcing a portion of a company’s work process. Hiring an
              offshore company to develop part or all of a game can be
              significantly less expensive than hiring full-time in-house
              developers. By using our services at WKB Gaming, you can save 60%
              or more compared to the cost of in-house development. Minimize
              your overhead costs and administrative hassles.
            </p>
          </div>
          </div>
        <div className={Styles.card3}>
          <div className={Styles.header}>
            <div className={Styles.icon1}>
              <MdMoreTime />
            </div>
            <div className={Styles.title}>
              <h5>More Time For Management</h5>
            </div>
          </div>
          <div className={Styles.description}>
            <p>
              As your business grows, tasks increase rapidly, and a single
              caretaker cannot manage the whole hierarchy. Tasks such as
              maintaining financial records, filing tax files, and managing
              human resources require an additional task force. Outsourcing your
              game gives you much free time to look deeply into the minor areas
              of your business. You can promote your business on new channels,
              develop new ideas, and run all the internal administrative tasks.
            </p>
            
            
        </div>
      </div>
    </div>
  );
};
