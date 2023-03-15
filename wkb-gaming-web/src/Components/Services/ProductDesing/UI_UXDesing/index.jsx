import React from "react";
import UI_UXDesing1 from "../../../../assets/Services/img/ProductDesing/UI_UXDesing/UX Design-min.png";
import UI_UXDesing2 from "../../../../assets/Services/img/ProductDesing/UI_UXDesing/UX Design-1-min.png";
import UI_UXDesing3 from "../../../../assets/Services/img/ProductDesing/UI_UXDesing/UX Design-2-min.png";
import UI_UXDesing4 from "../../../../assets/Services/img/ProductDesing/UI_UXDesing/UX Design-3-min.png";
import { Workflow } from "./Workflow";
import { KeyBenefits } from "./KeyBenefits";
import Styles from './UI_UXDesing.module.css'
export const UI_UXDesing = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.subtitle}>
        <h1>UI/UX Design for Web</h1>
      </div>
      <br />
      <div className={Styles.description}>
        <p>
          Design Studio experts specialize in designing complex interfaces for
          disruptive web applications as well as user experience (UX) services.
          We will help you crystalize a myriad of user flows in a product that
          has a convenient, user-friendly and intuitive UX and UI, following
          proven best practices in usability, compatibility, and accessibility.
        </p>
      </div>
      <br />
      <div className={Styles.subtitle}>
        <h1>UI/UX Design for Mobile</h1>
      </div>
      <br />
      <div className={Styles.description}>
        <p>
          The main challenge in creating favorable user experience in a mobile
          app is to balance between following the standard guidelines and
          tweaking them to make the application authentic and unique. Design
          Studio experts apply many-years’ experience to create spot-on design
          for iOS and Android applications that make smartphones smarter.
        </p>
      </div>
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={UI_UXDesing1} alt="UI_UXDesing1" />
        </div>
        <div className={Styles.div2}>
          <img src={UI_UXDesing2} alt="UI_UXDesing2" />
        </div>
        <div className={Styles.div3}>
          <img src={UI_UXDesing3} alt="UI_UXDesing3" />
        </div>
        <div className={Styles.div4}>
          <img src={UI_UXDesing4} alt="UI_UXDesing4" />
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
