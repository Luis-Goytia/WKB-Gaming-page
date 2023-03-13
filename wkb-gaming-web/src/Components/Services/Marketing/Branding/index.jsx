import React from "react";
import Branding1 from '../../../../assets/Services/img/Marketing/Branding/Content Marketing-min.png'
import Branding2 from '../../../../assets/Services/img/Marketing/Branding/Content Marketing-1-min.png'
import Branding3 from '../../../../assets/Services/img/Marketing/Branding/Content Marketing-2-min.png'
import Branding4 from '../../../../assets/Services/img/Marketing/Branding/Content Marketing-3-min.png'


export const MobileApp = () => {
  return (
    <div>
      <div>
        <h1>Mobile App Development</h1>
      </div>
      <div>
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
      <div>
      <div>
          <img src={Branding1} alt="Branding1" />
        </div>
        <div>
          <img src={Branding2} alt="Branding2" />
        </div>
        <div>
          <img src={Branding3} alt="Branding3" />
        </div>
        <div>
          <img src={Branding4} alt="Branding4" />
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
      </div>
      <div>
        <div>
          <h2>Key Benefits</h2>
        </div>
      </div>
    </div>
  );
};
