import React from "react";
import ContentMarketing1 from '../../../../assets/Services/img/Marketing/ContentMarketing/Content Marketing-min.png'
import ContentMarketing2 from '../../../../assets/Services/img/Marketing/ContentMarketing/Content Marketing-1-min.png'
import ContentMarketing3 from '../../../../assets/Services/img/Marketing/ContentMarketing/Content Marketing-2-min.png'
import ContentMarketing4 from '../../../../assets/Services/img/Marketing/ContentMarketing/Content Marketing-3-min.png'

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
          <img src={ContentMarketing1} alt="ContentMarketing1" />
        </div>
        <div>
          <img src={ContentMarketing2} alt="ContentMarketing2" />
        </div>
        <div>
          <img src={ContentMarketing3} alt="ContentMarketing3" />
        </div>
        <div>
          <img src={ContentMarketing4} alt="ContentMarketing4" />
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
