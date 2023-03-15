import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { TbCrown } from 'react-icons/tb';
import { BsStars } from 'react-icons/bs';

import Styles from './KeyBenefits.module.css';

export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <FaRegUser />
          </div>
          <div className={Styles.title}>
            <h5>Customer Recognition</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            In the world of ads, when a customer recognizes a brand’s color,
            theme, logo, etc., they are more likely to choose that product over
            all others. This is because they are already familiar with your
            brand and what it stands for. From something simple and minimalistic
            to something wild and eye-popping, a good brand will always be
            recognized in a sea of others.
          </p>
        </div>
      </div>
      <div className={Styles.card2}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <BsStars />
          </div>
          <div className={Styles.title}>
            <h5>Credibility</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Every customer has their trust issues whenever it comes to trying a
            new product or service, However, a strong brand can help you set
            yourself apart as a well-established business with strong values
            that customers can resonate with. Innovative marketing coupled with
            exceptional products and services, phenomenal customer service, and
            interesting visuals will surely help even a small company establish
            itself as a serious professional business.
          </p>
        </div>
      </div>
      <div className={Styles.card3}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <TbCrown />
          </div>
          <div className={Styles.title}>
            <h5>Attracts Talent</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            When a business has effective branding, it is hard for people to not
            notice. This attracts influencers, content creators, social media
            marketers, and other concept builders. When a business draws these
            kinds of people in, they increase their creative powerhouse.
            Collaborations with the right people can go a long way to promote
            your brand and uplift your brand’s digital presence. This helps you
            reach an even larger audience because people trust the
            recommendations of their favorite influencers and content creators.
          </p>
        </div>
      </div>
    </div>
  );
};
