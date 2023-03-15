import React from 'react';
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { GiStarShuriken } from 'react-icons/gi'
import { HiArrowPath } from "react-icons/hi2";
import Styles from "./KeyBenefits.module.css";

export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <AiOutlineUserSwitch />
          </div>
          <div className={Styles.title}>
            <h5>Build Brand Awareness & New Clients</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            One of the first benefits of Esports marketing is creating brand
            awareness, and drawing new and potential clients. As you align your
            brand with local esports teams, you will realise that you’ve
            positioned your brand to reach new audiences who might not be
            familiar with your product/services.
          </p>
        </div>
      </div>
      <div className={Styles.card2}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <GiStarShuriken />
          </div>
          <div className={Styles.title}>
            <h5>Loyalty is Sky High</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Loyalty is just as relevant in the esports industry as in any
            business environment. Brand loyalty is the second top benefits of
            esports marketing. Helping fans identify with their teams and build
            a passion for them is key in esports marketing.
          </p>
        </div>
      </div>
      <div className={Styles.card3}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <HiArrowPath />
          </div>
          <div className={Styles.title}>
            <h5>Getting a Good Return On Investment (ROI)</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Increasing the brand’s ROI is the last but not the least benefit of
            esports marketing. Research has shown that event sponsorship brings
            a solid return on investment to companies that operate effectively.
            One way to maximise the chances of success is having a crystal clear
            plan of action, and a set goal. To always be on track, set metrics
            to measure the impact of your efforts.
          </p>
        </div>
      </div>
    </div>
  );
};
