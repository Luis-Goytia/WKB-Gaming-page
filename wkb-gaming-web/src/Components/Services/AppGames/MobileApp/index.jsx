import React from "react";
import Mobile1 from '../../../../assets/Services/img/AppGames/MobileApp/Mobile App Development-min.png'
import Mobile2 from '../../../../assets/Services/img/AppGames/MobileApp/Mobile App Development-1-min.png'
import Mobile3 from '../../../../assets/Services/img/AppGames/MobileApp/Mobile App Development-2-min.png'
import Mobile4 from '../../../../assets/Services/img/AppGames/MobileApp/Mobile App Development-3-min.png'

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
        <div><img src={Mobile1} alt="Mobile1" /></div>
        <div><img src={Mobile2} alt="Mobile2" /></div>
        <div><img src={Mobile3} alt="Mobile3" /></div>
        <div><img src={Mobile4} alt="Mobile4" /></div>
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
