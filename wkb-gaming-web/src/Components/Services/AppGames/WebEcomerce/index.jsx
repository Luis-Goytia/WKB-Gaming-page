import React from "react";
import WebEcomerce1 from '../../../../assets/Services/img/AppGames/WebEcomerce/Ecommerce Development-min.png'
import WebEcomerce2 from '../../../../assets/Services/img/AppGames/WebEcomerce/Ecommerce Development-1-min.png'
import WebEcomerce3 from '../../../../assets/Services/img/AppGames/WebEcomerce/Ecommerce Development-2-min.png'
import WebEcomerce4 from '../../../../assets/Services/img/AppGames/WebEcomerce/Ecommerce Development-3-min.png'
import { Problem } from './Problem'
import {Workflow} from './Workflow'
import { KeyBenefits } from "./KeyBenefits";
import Styles from './WebEcomerce.module.css'
export const WebEcomerce = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.subtitle}>
        <h1>Web/Ecommerce Development</h1>
      </div>
      <div className={Styles.description}>
        <p>
          We help you to became an idea to real app using programming for your
          project.
        </p>
        <p>
          Ecommerce website design and development services help create an
          ecommerce solution uniquely tailored to your business in visual
          design, functionality, and customer experience tricks.
        </p>
      </div>
      <br />
      <div className={Styles.list_img}>
        <div className={Styles.div1}><img src={WebEcomerce1} alt="WebEcomerce1" /></div>
        <div className={Styles.div2}><img src={WebEcomerce2} alt="WebEcomerce2" /></div>
        <div className={Styles.div3}><img src={WebEcomerce3} alt="WebEcomerce3" /></div>
        <div className={Styles.div4}><img src={WebEcomerce4} alt="WebEcomerce4" /></div>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h2>Problem</h2>
        </div>
        <Problem/>
      </div>
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
        <KeyBenefits/>
      </div>
    </div>
  );
};
