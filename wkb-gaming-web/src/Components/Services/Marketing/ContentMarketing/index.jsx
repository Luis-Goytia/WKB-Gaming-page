import React from 'react';
import Content1 from '../../../../assets/Services/img/Marketing/ContentMarketing/Content Marketing-min.png';
import Content2 from '../../../../assets/Services/img/Marketing/ContentMarketing/Content Marketing-1-min.png';
import Content3 from '../../../../assets/Services/img/Marketing/ContentMarketing/Content Marketing-2-min.png';
import Content4 from '../../../../assets/Services/img/Marketing/ContentMarketing/Content Marketing-3-min.png';
import { KeyBenefits } from './KeyBenefits';
import { Workflow } from './Workflow';
import Styles from './ContentMarketing.module.css';
export const ContentMarketing = () => {
  return (
    <div>
      <div>
        <h1>Content Marketing</h1>
      </div>
      <div>
        <p>
          Our content marketing experts and graphic designers help alleviate
          stress with our content marketing services.
          <br /> We offer graphic design, email marketing, copywriting
          capabilities and a full range of standard and customizable content
          services to handle your needs or support your own team’s demands.
        </p>
      </div>
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={Content1} alt="Content1" />
        </div>
        <div className={Styles.div2}>
          <img src={Content2} alt="Content2" />
        </div>
        <div className={Styles.div3}>
          <img src={Content3} alt="Content3" />
        </div>
        <div className={Styles.div4}>
          <img src={Content4} alt="Content4" />
        </div>
      </div>
      <div>
        <p>Our Online Content Production & Design Services Include:</p>
      </div>
      <div>
        <br />
        <div className={Styles.frame}>
          • Thought-leadership & business-related blogs & articles
        </div>
        <br />
        <div className={Styles.frame}>
          • Business content (b2b and b2c content)
        </div>
        <br />
        <div className={Styles.frame}>
          • Sales collaterals (brochures, datasheets, position documents etc.)
        </div>
        <br />
        <div className={Styles.frame}>
          • Presentations (Keynote/PPT/Prezi formats)
        </div>
        <br />
        <div className={Styles.frame}>
          • e-Books, whitepapers, guides, how-to’s
        </div>
        <br />
        <div className={Styles.frame}>• Emailers</div>
        <br />
        <div className={Styles.frame}>
          • Infographics and creative design (visual social posts, posters,
          magazines, flyers, print/online ads, event backdrops, standees/popups,
          etc.)
        </div>
        <br />
        <div className={Styles.frame}>
          • Search Engine Marketing (SEM) ContentWKB partners with your internal
          team to understand your business
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
