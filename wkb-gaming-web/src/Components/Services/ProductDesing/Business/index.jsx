import React from "react";
import Business1 from "../../../../assets/Services/img/ProductDesing/Business/Business Digitalitation-min.png";
import Business2 from "../../../../assets/Services/img/ProductDesing/Business/Business Digitalitation-1-min.png";
import Business3 from "../../../../assets/Services/img/ProductDesing/Business/Business Digitalitation-2-min.png";
import Business4 from "../../../../assets/Services/img/ProductDesing/Business/Business Digitalitation-3-min.png";
import { Workflow } from "./Workflow";
import { KeyBenefits } from "./KeyBenefits";
import Styles from "./Business.module.css";

export const Business = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.subtitle}>
        <h1>Business Digitalitation</h1>
      </div>
      <br />
      <div className={Styles.description}>
        <p>
          We help you to became an idea to real app using programming for your
          project.
        </p>
        <p>
          We set up the development process from scratch and take full
          responsibility for the project risks: from timelines and budget to the
          final software quality.
        </p>
      </div>
      <br />
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={Business1} alt="Business1" />
        </div>
        <div className={Styles.div2}>
          <img src={Business2} alt="Business2" />
        </div>
        <div className={Styles.div3}>
          <img src={Business3} alt="Business3" />
        </div>
        <div className={Styles.div4}>
          <img src={Business4} alt="Business4" />
        </div>
      </div>
      <br />
      
      <div>
        <div className={Styles.subtitle}>
          <h2>How is our workflow</h2>
        </div>
        <br />
        <Workflow />
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h2>Key Benefits</h2>
        </div>
        <br />
        <KeyBenefits />
      </div>
    </div>
  );
};
