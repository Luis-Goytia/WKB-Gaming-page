import React from 'react';
import SocialMedia1 from '../../../../assets/Services/img/Marketing/SocialMedia/Social Media Strategy-min.png';
import SocialMedia2 from '../../../../assets/Services/img/Marketing/SocialMedia/Social Media Strategy-1-min.png';
import SocialMedia3 from '../../../../assets/Services/img/Marketing/SocialMedia/Social Media Strategy-2-min.png';
import SocialMedia4 from '../../../../assets/Services/img/Marketing/SocialMedia/Social Media Strategy-3-min.png';
import Styles from './SocialMedia.module.css';
import { Workflow } from './Workflow';
import { KeyBenefits } from './KeyBenefits';

export const SocialMedia = () => {
  return (
    <div>
      <div>
        <h1>Social Media Strategy</h1>
      </div>
      <div>
        <p>
          Today, most businesses understand that social media is an essential
          part of any B2B and B2C marketing mix. Where they struggle, is finding
          the right approach.
        </p>
        <p>Level up your social media presence – without the guesswork!</p>
        <p>
          We help brands use social media to their advantage using our
          data-driven strategies and winning social media marketing and
          advertising campaigns.
        </p>
        <p>
          Without a strategy, you might end up flooding your social media
          channels with fluffy content. It’s all too easy to focus on producing
          a lot of content, rather than quality content.
        </p>
      </div>
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={SocialMedia1} alt="SocialMedia1" />
        </div>
        <div className={Styles.div2}>
          <img src={SocialMedia2} alt="SocialMedia2" />
        </div>
        <div className={Styles.div3}>
          <img src={SocialMedia3} alt="SocialMedia3" />
        </div>
        <div className={Styles.div4}>
          <img src={SocialMedia4} alt="SocialMedia4" />
        </div>
      </div>
      <div>
        <div>
          <h2>How is our workflow</h2>
        </div>
        <Workflow />
      </div>
      <div>
        <div>
          <h2>Key Benefits</h2>
        </div>
        <KeyBenefits />
      </div>
    </div>
  );
};
