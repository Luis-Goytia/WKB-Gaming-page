import React from "react";
import Product1 from "../../../../assets/Services/img/AppGames/ProductDesign/Product Design Factory-min.png";
import Product2 from "../../../../assets/Services/img/AppGames/ProductDesign/Product Design Factory-1-min.png";
import Product3 from "../../../../assets/Services/img/AppGames/ProductDesign/Product Design Factory-2-min.png";
import Product4 from "../../../../assets/Services/img/AppGames/ProductDesign/Product Design Factory-3-min.png";
import { Problem } from "./Problem";
import { Workflow } from "./Workflow";
import { KeyBenefits } from "./KeyBenefits";
import Styles from "./ProductDesing.module.css";
export const ProductDesign = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.component}>
        <h1>Product Design/Factory</h1>
      </div>
      <div className={Styles.description}>
        <p>
          We help our clients not only define strategies – but also bring to
          market products at scale.
        </p>
        <p>
          WKB’s dedicated development teams build custom web and mobile apps
          with a focus on speed to market. We are able to deliver your digital
          product MVP in as little as 2-6 month employing the lean startup
          approach and agile software development.
        </p>
      </div>
      <br />
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={Product1} alt="Product1" />
        </div>
        <div className={Styles.div2}>
          <img src={Product2} alt="Product2" />
        </div>
        <div className={Styles.div3}>
          <img src={Product3} alt="Product3" />
        </div>
        <div className={Styles.div4}>
          <img src={Product4} alt="Product4" />
        </div>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h2>Problem</h2>
        </div>
        <Problem />
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h2>How is our workflow</h2>
        </div>
        <Workflow />
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h2>Key Benefits</h2>
        </div>
        <KeyBenefits />
      </div>
    </div>
  );
};
