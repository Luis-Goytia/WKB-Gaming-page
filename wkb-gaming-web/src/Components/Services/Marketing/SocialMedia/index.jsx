import React from "react";
import SocialMedia1 from "../../../../assets/Services/img/Marketing/SocialMedia/Social Media Strategy-min.png";
import SocialMedia2 from "../../../../assets/Services/img/Marketing/SocialMedia/Social Media Strategy-1-min.png";
import SocialMedia3 from "../../../../assets/Services/img/Marketing/SocialMedia/Social Media Strategy-2-min.png";
import SocialMedia4 from "../../../../assets/Services/img/Marketing/SocialMedia/Social Media Strategy-3-min.png";

export const SocialMedia = () => {
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
          <img src={SocialMedia1} alt="SocialMedia1" />
        </div>
        <div>
          <img src={SocialMedia2} alt="SocialMedia2" />
        </div>
        <div>
          <img src={SocialMedia3} alt="SocialMedia3" />
        </div>
        <div>
          <img src={SocialMedia4} alt="SocialMedia4" />
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
