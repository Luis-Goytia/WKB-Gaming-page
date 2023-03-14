import React from "react";
import Digital1 from "../../../../assets/Services/img/EsportServices/EsportDigital/Esports Digital Marketing-min.png";
import Digital2 from "../../../../assets/Services/img/EsportServices/EsportDigital/Esports Digital Marketing-1-min.png";
import Digital3 from "../../../../assets/Services/img/EsportServices/EsportDigital/Esports Digital Marketing-2-min.png";
import Digital4 from "../../../../assets/Services/img/EsportServices/EsportDigital/Esports Digital Marketing-3-min.png";

export const EsportDigital = () => {
  return (
    <div>
      <div>
        <h1>Esports Digital Marketing</h1>
      </div>
      <div>
        <p>Uncover The Key to Creating a Winning Esports Marketing Strategy</p>
        <p>
          Demolish the competition and catapult your esports business to the top
          with our comprehensive promotion services.
        </p>
      </div>
      <div>
        <div>
          <img src={Digital1} alt="Digital1" />
        </div>
        <div>
          <img src={Digital2} alt="Digital2" />
        </div>
        <div>
          <img src={Digital3} alt="Digital3" />
        </div>
        <div>
          <img src={Digital4} alt="Digital4" />
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
