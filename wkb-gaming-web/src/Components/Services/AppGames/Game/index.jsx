import React from "react";
import Game1 from "../../../../assets/Services/img/AppGames/Game/Game Development-min.png";
import Game2 from "../../../../assets/Services/img/AppGames/Game/Game Development-1-min.png";
import Game3 from "../../../../assets/Services/img/AppGames/Game/Game Development-2-min.png";
import Game4 from "../../../../assets/Services/img/AppGames/Game/Game Development-3-min.png";
import { Problem } from './Problem'
import {Workflow} from './Workflow'
import { KeyBenefits } from "./KeyBenefits";
import Styles from './Game.module.css'
export const Game = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.component}>
        <h1>Game Development</h1>
      </div >
      <br />
      <div className={Styles.description}>
        <p>
          We offer professional mobile game development services to help you
          create your own custom mobile games. We use latest mobile game engines
          that allows us to develop 2D and 3D mobile games for a variety of
          mobile devices, including iOS, Android, and Windows Phone.
        </p>
      </div>
      <br />
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={Game1} alt="Game1" />
        </div>
        <div className={Styles.div2}>
          <img src={Game2} alt="Game2" />
        </div>
        <div className={Styles.div3}>
          <img src={Game3} alt="Game3" />
        </div>
        <div className={Styles.div4}>
          <img src={Game4} alt="Game4" />
        </div>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h2 >Problem</h2>
        </div>
        <Problem/>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h2>How is our workflow</h2>
          
        </div>
        <Workflow/>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h2>Key Benefits</h2>
        </div>
        <br />
        <KeyBenefits/>
      </div>
    </div>
  );
};
