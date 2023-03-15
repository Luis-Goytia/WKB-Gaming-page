import React from "react";
import Event1 from "../../../../assets/Services/img/EsportServices/EventManagement/Event Management-min.png";
import Event2 from "../../../../assets/Services/img/EsportServices/EventManagement/Event Management-1-min.png";
import Event3 from "../../../../assets/Services/img/EsportServices/EventManagement/Event Management-2-min.png";
import Event4 from "../../../../assets/Services/img/EsportServices/EventManagement/Event Management-3-min.png";
import { Workflow } from "./Workflow";
import { KeyBenefits } from "./KeyBenefits";
import Styles from "./EventManagement.module.css";

export const EventManagement = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.subtitle}>
        <h1>Event Management</h1>
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
        <div className={Styles.div1}>
          <img src={Event1} alt="Event1" />
        </div>
        <div className={Styles.div2}>
          <img src={Event2} alt="Event2" />
        </div>
        <div className={Styles.div3}>
          <img src={Event3} alt="Event3" />
        </div>
        <div className={Styles.div4}>
          <img src={Event4} alt="Event4" />
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
