import React from "react";
import { RiShieldCheckLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiArrowTrendingUp } from "react-icons/gr";
import { GrDiamond } from "react-icons/gr";
export const KeyBenefits = () => {
  return (
    <div>
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
            <GrDiamond />
          </div>
          <div className={Styles.title}>
            <h5>Best First Impression</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Web design is important because it impacts how your audience
            perceives your brand. When your audience visits your website, it
            gives them their first impresión of your business.
          </p>
        </div>
      </div>
      <div className={Styles.card}>
        <div>
          <div className={Styles.icon}>
            <HiArrowTrendingUp />
          </div>
          <div className={Styles.title}>
            <h5>Growth Opportunity</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            In addition to customers, your website can also attract potential
            investors. To collaborate with you on your business projects. This
            will help boost your Customer Relationships Management in the long
            run.
          </p>
        </div>
      </div>
    </div>
  );
};
