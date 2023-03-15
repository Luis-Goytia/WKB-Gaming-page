import React from 'react';
import Styles from './Workflow.module.css';
export const Workflow = () => {
  return (
    <div>
      <div>
        <div className={Styles.subtitle}>
          <h5>1- Develop visión & objectives</h5>
        </div>
        <br />
        <div>
          <p>
            You may already have an idea of what you want to sell, but it’s not
            enough that you like the concept and your friends think it tastes
            good. You need to understand what similar products are available
            from competitors and where there’s a gap you can fill. How are you
            going to differentiate yours so that customers will want it? Will
            you be selling more than one product or type of food? What does it
            cost to produce and how will you price it for profitability?
          </p>
        </div>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h5>3 - Product and Market Testing</h5>
        </div>
        <div>
          <p>
            Identify problems or threats to product usability outside the
            product development process. Refine and improve a product before the
            final product delivery. Gain consumer feedback that can be used to
            support initial marketing communications. Market testing is an
            evaluation saved for only those products whose performance would be
            difficult to predict or those products that have seen inconsistent
            or on-the-fence feedback.
          </p>
        </div>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>4. Implementation</h5>
        </div>
        <div>
          <p>
            In an ideal world, you would merely announce what you have to offer
            and people would queue up to buy it. Of course that’s not going to
            happen. If you sell from a physical location, consider a popup or
            soft launch. If yours is a packaged product, try to set up some
            sampling sites. Consider coupons, discounts and giveaways to get
            folks to check it out. <br /> Also, be sure you can produce enough
            to meet demand if your product takes off.
          </p>
        </div>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>5. Evaluation</h5>
        </div>
        <div>
          <p>
            Even products that launch successfully seldom have steadily
            increased sales. Revenues often level out or sometimes drop off.
            Even if you’re doing well, maybe you can do better.
            <br /> It’s good to revisit the previous growth stages. Be
            constantly attuned to feedback on your product and marketing
            strategy. There may be an opportunity to improve your product,
            develop new offerings, improve your distribution through current
            channels or even explore new ways to sell.
          </p>
        </div>
      </div>
    </div>
  );
};
