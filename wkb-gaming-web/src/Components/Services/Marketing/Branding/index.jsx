import React from 'react';
import Branding1 from '../../../../assets/Services/img/Marketing/Branding/Branding-min.png';
import Branding2 from '../../../../assets/Services/img/Marketing/Branding/Branding-1-min.png';
import Branding3 from '../../../../assets/Services/img/Marketing/Branding/Branding-2-min.png';
import Branding4 from '../../../../assets/Services/img/Marketing/Branding/Branding-3-min.png';
import { KeyBenefits } from './KeyBenefits';
import { Workflow } from './Workflow';
import Styles from './Branding.module.css';
export const Branding = () => {
  return (
    <div>
      <div>
        <h1>Branding</h1>
      </div>
      <div>
        <p>
          Every moment matters. We create big brand ideas that move people,
          experiences that inspire sharing and create lasting connections:{' '}
          <br />
          <br />
          The experience is the brand. A great brand experience is designed from
          everyday interactions to special events.
        </p>
      </div>
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={Branding1} alt="Branding1" />
        </div>
        <div className={Styles.div2}>
          <img src={Branding2} alt="Branding2" />
        </div>
        <div className={Styles.div3}>
          <img src={Branding3} alt="Branding3" />
        </div>
        <div className={Styles.div4}>
          <img src={Branding4} alt="Branding4" />
        </div>
      </div>
      <div>
        <p>
          Every moment matters. We create big brand ideas that move people,
          experiences that inspire sharing and create lasting connections:
        </p>
      </div>

      <br />
      <div className={Styles.frame}>• Visual Audit</div>
      <br />
      <div className={Styles.frame}>• Brand Design</div>
      <br />
      <div className={Styles.frame}>• Social media branding</div>
      <br />
      <div className={Styles.frame}>• Naming</div>
      <br />
      <div className={Styles.frame}>• Visual System</div>
      <br />
      <div className={Styles.frame}>• Brand Training</div>
      <br />
      <div className={Styles.frame}>• Brand Video</div>
      <br />
      <div className={Styles.frame}>• Environments</div>
      <br />
      <div className={Styles.frame}>• Brand Campaigns</div>
      <br />
      <br />
      <br />
      <div>
        <div>
          <h2>How is our workflow</h2>
        </div>
        <Workflow />
      </div>
      <br />
      <br />
      <div>
        <div>
          <h2>Key Benefits</h2>
        </div>
        <KeyBenefits />
      </div>
    </div>
  );
};
