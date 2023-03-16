import React from "react";
import Styles from "./Brands.module.css";
import Afa from "../../../assets/HOME/PARTNERS LOGOS/AFA.png";
import Arvum from "../../../assets/HOME/PARTNERS LOGOS/ARVUM.png";
import Edojo from "../../../assets/HOME/PARTNERS LOGOS/EDOJO.png";
import Inglot from "../../../assets/HOME/PARTNERS LOGOS/INGLOT.png";
import Lineage from "../../../assets/HOME/PARTNERS LOGOS/LINEAGE 2.png";
import Mebac from "../../../assets/HOME/PARTNERS LOGOS/MEBAC!.png";
import Mercovan from "../../../assets/HOME/PARTNERS LOGOS/MERCOVAN.png";
import Nivel from "../../../assets/HOME/PARTNERS LOGOS/NIVEL.png";
import Oniria from "../../../assets/HOME/PARTNERS LOGOS/ONIRIA.png";
import PlantaCura from "../../../assets/HOME/PARTNERS LOGOS/PLANTA CURA.png";
import Salta from "../../../assets/HOME/PARTNERS LOGOS/SALTA.png";
import Sony from "../../../assets/HOME/PARTNERS LOGOS/SONY.png";
import Vw from "../../../assets/HOME/PARTNERS LOGOS/VW.png";

export const Brands = () => {
  return (
    <div>
      <br />
      <ul className={Styles.parnertsList}>
        <li>
          <img src={Oniria} alt="Oniria" />
        </li>
        <li>
          <img src={Mercovan} alt="Mercovan" />
        </li>
        <li>
          <img src={Lineage} alt="Lineage" />
        </li>
        <li>
          <img src={Mebac} alt="Mebac" />
        </li>
        <li>
          <img src={Nivel} alt="Nivel" />
        </li>

        <li>
          <img src={Afa} alt="Afa" />
        </li>
        <li>
          <img src={Inglot} alt="Inglot" />
        </li>
        <li>
          <img src={Arvum} alt="Arvum" />
        </li>

        <li>
          <img src={Sony} alt="Sony" />
        </li>
        <li>
          <img src={Vw} alt="Vw" />
        </li>
        <li>
          <img src={Salta} alt="Salta" />
        </li>
        <li>
          <img src={PlantaCura} alt="PlantaCura" />
        </li>
        <li>
          <img src={Edojo} alt="Edojo" />
        </li>
      </ul>
    </div>
  );
};
