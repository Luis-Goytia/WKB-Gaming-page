import React from "react";
import Mobile1 from '../../../../assets/Services/img/AppGames/MobileApp/Mobile App Development-min.png'
import Mobile2 from '../../../../assets/Services/img/AppGames/MobileApp/Mobile App Development-1-min.png'
import Mobile3 from '../../../../assets/Services/img/AppGames/MobileApp/Mobile App Development-2-min.png'
import Mobile4 from '../../../../assets/Services/img/AppGames/MobileApp/Mobile App Development-3-min.png'
import { Problem } from './Problem'
import {Workflow} from './Workflow'
import { KeyBenefits } from "./KeyBenefits";
import Styles from './MobileApp.module.css'
export const MobileApp = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.subtitle}>
        <h1>Mobile App Development</h1>
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
      <br />
      <div className={Styles.list_img}>
        <div className={Styles.div1}><img src={Mobile1} alt="Mobile1" /></div>
        <div className={Styles.div2}><img src={Mobile2} alt="Mobile2" /></div>
        <div className={Styles.div3}><img src={Mobile3} alt="Mobile3" /></div>
        <div className={Styles.div4}><img src={Mobile4} alt="Mobile4" /></div>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h2>Problem</h2>
        </div>
        <Problem/>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h2>How is our workflow</h2>
        </div>
        <Workflow/>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h2>Key Benefits</h2>
        </div>
        <br />
        <KeyBenefits/>
      </div>
    </div>
  );
};
