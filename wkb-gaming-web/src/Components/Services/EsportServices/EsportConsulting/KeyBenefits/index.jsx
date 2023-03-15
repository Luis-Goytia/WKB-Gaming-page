import React from "react";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { BsClockHistory } from "react-icons/bs";
import { GiCrosshair } from "react-icons/gi";
import Styles from "./KeyBenefits.module.css";
export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <HiOutlineSquaresPlus />
          </div>
          <div className={Styles.title}>
            <h5>Optimization operating and service costs</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Doing an exhaustive analysis of the needs of a company, business
            consulting services will be able to determine the situations that
            the business goes through, in order to optimize operating and
            service costs. In this way, you will be able to avoid capital flight
            and unnecessary expenses.
          </p>
        </div>
      </div>
      <div className={Styles.card2}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <BsClockHistory />
          </div>
          <div className={Styles.title}>
            <h5>Time Savings</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            The experience means that we know best practices already. For
            example, we can look at a client’s manufacturing process and very
            quickly identify inefficiencies. With an esport consulting, there is
            no need for business owners to reinvent the wheel or lose valuable
            time.
          </p>
        </div>
      </div>
      <div className={Styles.card3}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <GiCrosshair />
          </div>
          <div className={Styles.title}>
            <h5>Objectivity</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Esport consulting provide a useful distance from business
            challenges; they are not emotionally invested in operations in the
            same way that business owners are and they can more easily identify
            and address challenges, whether the issue is implementing a new
            technology or completing a merger or acquisition.
          </p>
        </div>
      </div>
    </div>
  );
};
