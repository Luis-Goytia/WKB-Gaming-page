import React from "react";
import Consulting1 from "../../../../assets/Services/img/EsportServices/EsportConsulting/Esport Consulting-min.png";
import Consulting2 from "../../../../assets/Services/img/EsportServices/EsportConsulting/Esport Consulting-1-min.png";
import Consulting3 from "../../../../assets/Services/img/EsportServices/EsportConsulting/Esport Consulting-2-min.png";
import Consulting4 from "../../../../assets/Services/img/EsportServices/EsportConsulting/Esport Consulting-3-min.png";
import { Problem } from './Problem'
import {Workflow} from './Workflow'
import { KeyBenefits } from "./KeyBenefits";
import Styles from './EsportConsulting.module.css'
export const EsportConsulting = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.subtitle}>
        <h1>Esport Consulting</h1>
      </div>
      <div className={Styles.description}>
        <p>
          Esports are poised to be one of the biggest growing industries in the
          21st century.
        </p>
        <p>
          We want to make sure that players and organizations will grow with it,
          helping organizations and individuals understand the more complex
          aspects of working within the esports industry. We want to help
          aspiring teams identify what it takes to build their brand. We want to
          help current organizations fill the holes that are slowing down their
          growth. Esports Consulting is here to help develop the esports scene
          through the organizations that drive it.
        </p>
      </div>
      <div className={Styles.list_img}>
        <div className={Styles.div1} >
          <img src={Consulting1} alt="Consulting1" />
        </div >
        <div className={Styles.div2}>
          <img src={Consulting2} alt="Consulting2" />
        </div>
        <div className={Styles.div3}>
          <img src={Consulting3} alt="Consulting3" />
        </div>
        <div className={Styles.div4}>
          <img src={Consulting4} alt="Consulting4" />
        </div>
        <br />
      </div>
      <div>
        <Problem/>
      </div>
      <div >
        <div>
          <h1>How is our workflow</h1>
        </div>
        <br />
        <Workflow/>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h2>Key Benefits</h2>
        </div><br />
        <KeyBenefits />
        
      </div>
    </div>
  );
};
