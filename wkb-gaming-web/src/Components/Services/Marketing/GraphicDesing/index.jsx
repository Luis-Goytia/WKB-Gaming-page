import React from 'react';
import GraphicDesing1 from '../../../../assets/Services/img/Marketing/GraphicDesing/Graphic Design & animation-min.png';
import GraphicDesing2 from '../../../../assets/Services/img/Marketing/GraphicDesing/Graphic Design & animation-1-min.png';
import GraphicDesing3 from '../../../../assets/Services/img/Marketing/GraphicDesing/Graphic Design & animation-2-min.png';
import GraphicDesing4 from '../../../../assets/Services/img/Marketing/GraphicDesing/Graphic Design & animation-3-min.png';
import Styles from './GraphicDesign.module.css';
import { Workflow } from './Workflow';
import { KeyBenefits } from './KeyBenefits';
export const GraphicDesing = () => {
  return (
    <div>
      <div>
        <h1>Graphic Design & animation</h1>
      </div>
      <div>
        <p>
          3D, Visual Effects, Broadcast, Print & more. We use the latest
          equipment and software to create powerful, memorable, images and
          messages.
        </p>
        <p>
          If you're looking to explain or promote a business product, service or
          reach an audience for most anything. Motion graphics and animation are
          a highly effective way to connect and stand out.
        </p>
      </div>
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={GraphicDesing1} alt="GraphicDesing1" />
        </div>
        <div className={Styles.div2}>
          <img src={GraphicDesing2} alt="GraphicDesing2" />
        </div>
        <div className={Styles.div3}>
          <img src={GraphicDesing3} alt="GraphicDesing3" />
        </div>
        <div className={Styles.div4}>
          <img src={GraphicDesing4} alt="GraphicDesing4" />
        </div>
      </div>
      <div>
        <br />
        <div>List of Design Services</div>
      </div>
      <br />
      <div className={Styles.frame}>• Website design</div>
      <br />
      <div className={Styles.frame}>• Social Media Design</div>
      <br />
      <div className={Styles.frame}>• Logo design and branding</div>
      <br />
      <div className={Styles.frame}>• Print design</div>
      <br />
      <div className={Styles.frame}>• Advertising</div>
      <br />
      <div className={Styles.frame}>• Infographics</div>
      <br />
      <div className={Styles.frame}>• Presentation design</div>
      <br />
      <div className={Styles.frame}>• Letter design</div>
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
