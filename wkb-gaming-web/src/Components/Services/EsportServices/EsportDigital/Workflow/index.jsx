import React from "react";
import Marketing from '../../../../../assets/Services/img/EsportServices/EsportDigital/Marketing.svg'
import Styles from "./Workflow.module.css";
export const Workflow = () => {
  return (
    <div>
      <div>
        <div className={Styles.subtitle}>
          <h5>1 - Marketing Audit</h5>
        </div>
        <div className={Styles.text2}>
          <p>
            We need a situation analysis to evaluate the project, an audit is
            the first step.
          </p>
          <p>
            Get to know their website, social media, sponsors, members,
            storytelling and revenues, if you have access to them.
          </p>
        </div>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>2 - Marketing analytics</h5>
        </div>
        <div className={Styles.text2}>
          <p>
            Both internally and externally, know which elements will affect your
            plan and what your fans, followers or clients say about you and your
            product.
          </p>
        </div>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>3 - Marketing strategy</h5>
        </div>
      </div>
      <div className={Styles.text2}>
        <p>
          Obsess about defining your client the most precisely as possible along
          with the brand positioning you want to be perceived in the market.
          This stage will be crucial to set your goals.
        </p>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>4 - Marketing operations</h5>
        </div>
        <div className={Styles.text2}>
          <p>
            Let the adventure of making everything written on paper become real
            begin. Being able to predict different scenarios will allow you to
            be more accurate in your adaptability.Key Benefits
          </p>
        </div>
      </div>
      <br />
          <div>
              <img src={Marketing} alt="Marketing" className={Styles.marketing} />
          </div>
    </div>
  );
};
