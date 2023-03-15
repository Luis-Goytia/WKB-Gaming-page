import React from "react";
import { FaRobot } from "react-icons/fa";
import { BiPlanet } from "react-icons/bi";
import { RiScalesLine } from "react-icons/ri";
import { HiOutlineDatabase } from "react-icons/hi";
import Styles from "./KeyBenefits.module.css";
export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <FaRobot />
          </div>
          <div className={Styles.title}>
            <h5>Limits Human Error</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            An undeniable advantage of going digital is that digital processes
            stop errors by eliminating time-consuming manual data entry and
            human inefficiencies. Digital processes are inherently smoother and
            less risky than any process that involves error-prone humans.
          </p>
        </div>
      </div>
      <div className={Styles.card2}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
          <RiScalesLine />
          </div>
          <div className={Styles.title}>
            <h5>Increases Operational Efficiency</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Digital transformation gives you increased operational efficiency.
            You can consolidate messy manual processes and reduce overhead costs
            by integrating with back-office systems, automating delivery
            processes and product updates, enabling inter-device activation,
            managing multiple product variants, and more. With digital business
            processes, you'll save time, plug revenue holes, and decrease
            frustration. Because digital business is synonymous with efficient
            business.
          </p>
        </div>
      </div>
      <div className={Styles.card3}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            
            <BiPlanet />
          </div>
          <div className={Styles.title}>
            <h5>Enables Future Digital Growth</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            The final benefit of digital transformation is the most fundamental.
            Digital transformation is the initial act that sets the stage for
            all subsequent business growth. Without investing in digital
            business transformation, your company will quickly become obsolete.
            In the past few years, we've seen industry giants like Blockbuster,
            Toys R' Us, and Kodak go bankrupt. Why? Because they failed at
            digital transformation. Digital transformation is not optional. It's
            not the icing on the cake of a thriving business. To survive the
            digital tsunami engulfing the world, you must take steps to
            transform. Once you do, you'll reap the benefits of digital
            transformation and become stronger and more profitable for years to
            come.
          </p>
        </div>
      </div>
      <div className={Styles.card4}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <HiOutlineDatabase />
          </div>
          <div className={Styles.title}>
            <h5>Enhanced data collection</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Most businesses are collecting mountains of customer data, but the
            real benefit is optimizing this data for analysis that can drive the
            business forward. Digital transformation creates a system for
            gathering the right data and incorporating it fully for business
            intelligence at a higher level. It creates a way that different
            functional units within an organization can translate raw data into
            insights across various touch points. By doing this, it produces a
            single view of the customer journey, operations, production,
            finance, and business opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};
