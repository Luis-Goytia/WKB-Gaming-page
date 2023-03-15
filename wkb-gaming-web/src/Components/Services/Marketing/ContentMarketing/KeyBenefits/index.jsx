import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { GiShakingHands, GiWatch } from 'react-icons/gi';

import Styles from './KeyBenefits.module.css';
export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <GiShakingHands />
          </div>
          <div className={Styles.title}>
            <h5>Expertise and Experience</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            We have extensive experience and expertise in creating content that
            attracts and engages customers. You can save time and resources, as
            we have team of specialists who understand the nuances of content
            marketing and who know how to create effective content that
            resonates with customers.
          </p>
        </div>
      </div>
      <div className={Styles.card2}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <FaGoogle />
          </div>
          <div className={Styles.title}>
            <h5>Google likes best content</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Google is obsessed with providing its users with the search
            experiences that deliver what they’re looking for. High-quality
            content is often the best way to provide that experience.
          </p>
        </div>
      </div>
      <div className={Styles.card3}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <GiWatch />
          </div>
          <div className={Styles.title}>
            <h5>Time Efficiency</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Businesses don’t have to spend time doing content and can focus on
            other important tasks. Working with a team that values time
            efficiency can be especially beneficial, as they can create content
            quickly and efficiently, helping businesses to achieve measurable
            results and reach their goals. Additionally, we can provide valuable
            insights into the efficacy of content and offer suggestions for
            improvement, helping businesses to get the most out of their
            marketing budget and maximize the effectiveness of their content
            marketing strategy.
          </p>
        </div>
      </div>
    </div>
  );
};
