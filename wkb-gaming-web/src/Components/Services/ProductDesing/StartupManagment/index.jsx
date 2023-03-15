import React from 'react';
import StartupManagment1 from '../../../../assets/Services/img/ProductDesing/StartupManagment/Startup Managment-min.png';
import StartupManagment2 from '../../../../assets/Services/img/ProductDesing/StartupManagment/Startup Managment-1-min.png';
import StartupManagment3 from '../../../../assets/Services/img/ProductDesing/StartupManagment/Startup Managment-2-min.png';
import StartupManagment4 from '../../../../assets/Services/img/ProductDesing/StartupManagment/Startup Managment-3-min.png';
import Styles from './StartupManagment.module.css';
import { Workflow } from './Workflow';
import { KeyBenefits } from './KeyBenefits';
export const StartupManagment = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.subtitle}>
        <h1>Startup Managment</h1>
      </div>
      <div className={Styles.description}>
        <p>
          Business digitalization is the integration of technology that
          transforms the way organizations operate across their different areas,
          services and channels, with customers and other stakeholders. A true
          digital transformation process goes beyond buying and using a new tool
          or software; it requires an honest commitment from the entire
          organization to evaluate, challenge and reconfigure business processes
          at a path and pace that work for that company, their clients and their
          suppliers
        </p>
      </div>
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={StartupManagment1} alt="StartupManagment1" />
        </div>
        <div className={Styles.div2}>
          <img src={StartupManagment2} alt="StartupManagment2" />
        </div>
        <div className={Styles.div3}>
          <img src={StartupManagment3} alt="StartupManagment3" />
        </div>
        <div className={Styles.div4}>
          <img src={StartupManagment4} alt="StartupManagment4" />
        </div>
      </div>
      <div>
        <div>
          <h2>Problem</h2>
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
