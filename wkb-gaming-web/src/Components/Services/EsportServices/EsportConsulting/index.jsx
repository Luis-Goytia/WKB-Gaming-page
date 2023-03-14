import React from "react";
import Consulting1 from "../../../../assets/Services/img/EsportServices/EsportConsulting/Esport Consulting-min.png";
import Consulting2 from "../../../../assets/Services/img/EsportServices/EsportConsulting/Esport Consulting-1-min.png";
import Consulting3 from "../../../../assets/Services/img/EsportServices/EsportConsulting/Esport Consulting-2-min.png";
import Consulting4 from "../../../../assets/Services/img/EsportServices/EsportConsulting/Esport Consulting-3-min.png";

export const EsportConsulting = () => {
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
        <div><img src={Consulting1} alt="Consulting1" /></div>
        <div><img src={Consulting2} alt="Consulting2" /></div>
        <div><img src={Consulting3} alt="Consulting3" /></div>
        <div><img src={Consulting4} alt="Consulting4" /></div>
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
