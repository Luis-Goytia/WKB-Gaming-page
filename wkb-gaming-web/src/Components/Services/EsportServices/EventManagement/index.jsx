import React from "react";
import Event1 from "../../../../assets/Services/img/EsportServices/EventManagement/Event Management-min.png";
import Event2 from "../../../../assets/Services/img/EsportServices/EventManagement/Event Management-1-min.png";
import Event3 from "../../../../assets/Services/img/EsportServices/EventManagement/Event Management-2-min.png";
import Event4 from "../../../../assets/Services/img/EsportServices/EventManagement/Event Management-3-min.png";
export const EventManagement = () => {
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
          <img src={Event1} alt="Event1" />
        </div>
        <div>
          <img src={Event2} alt="Event2" />
        </div>
        <div>
          <img src={Event3} alt="Event3" />
        </div>
        <div>
          <img src={Event4} alt="Event4" />
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
