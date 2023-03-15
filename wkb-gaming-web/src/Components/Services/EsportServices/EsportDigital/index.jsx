import React from "react";
import Digital1 from "../../../../assets/Services/img/EsportServices/EsportDigital/Esports Digital Marketing-min.png";
import Digital2 from "../../../../assets/Services/img/EsportServices/EsportDigital/Esports Digital Marketing-1-min.png";
import Digital3 from "../../../../assets/Services/img/EsportServices/EsportDigital/Esports Digital Marketing-2-min.png";
import Digital4 from "../../../../assets/Services/img/EsportServices/EsportDigital/Esports Digital Marketing-3-min.png";
import {Workflow} from './Workflow'
import { KeyBenefits } from "./KeyBenefits";
import Styles from './EsportDigital.module.css'
export const EsportDigital = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.subtitle}>
        <h1>Esports Digital Marketing</h1>
      </div>
      <br />
      <div className={Styles.description}>
        <p>Uncover The Key to Creating a Winning Esports Marketing Strategy</p>
        <p>
          Demolish the competition and catapult your esports business to the top
          with our comprehensive promotion services.
        </p>
      </div>
      <br />
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={Digital1} alt="Digital1" />
        </div>
        <div className={Styles.div2}>
          <img src={Digital2} alt="Digital2" />
        </div>
        <div className={Styles.div3}>
          <img src={Digital3} alt="Digital3" />
        </div>
        <div className={Styles.div4}>
          <img src={Digital4} alt="Digital4" />
        </div>
      </div>
      <div>
      </div>
      <div>
        <div>
          <h2>How is our workflow</h2>
        </div>
        <br />
        <Workflow/>
      </div>
      <div>
        <div>
          <h2>Key Benefits</h2>
        </div>
        <br />
        <KeyBenefits/>
      </div>
    </div>
  );
};
