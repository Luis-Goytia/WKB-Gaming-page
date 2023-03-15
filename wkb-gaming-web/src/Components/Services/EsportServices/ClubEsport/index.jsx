import React from "react";
import Club1 from "../../../../assets/Services/img/EsportServices/ClubEsport/Club Esport Development-min.png";
import Club2 from "../../../../assets/Services/img/EsportServices/ClubEsport/Club Esport Development-1-min.png";
import Club3 from "../../../../assets/Services/img/EsportServices/ClubEsport/Club Esport Development-2-min.png";
import Club4 from "../../../../assets/Services/img/EsportServices/ClubEsport/Club Esport Development-3-min.png";
import { Workflow } from "./Workflow";
import { KeyBenefits } from "./KeyBenefits";
import Styles from "./ClubEsport.module.css";
export const ClubEsport = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.subtitle}>
        <h1>Club Esport Development</h1>
      </div>
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
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={Club1} alt="Club1" />
        </div>
        <div className={Styles.div2}>
          <img src={Club2} alt="Club2" />
        </div>
        <div className={Styles.div3}>
          <img src={Club3} alt="Club3" />
        </div>
        <div className={Styles.div4}>
          <img src={Club4} alt="Club4" />
        </div>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h2>How is our workflow</h2>
        </div>
        <Workflow/>
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
