import React from "react";
import Styles from "./Footer.module.css";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import LogoWKB from "../../../assets/HOME/WKB LOGOS/Logotipo Walker Bear.svg";
export const Footer = () => {
  return (
    <footer>
      <div>
        <div className={Styles.info}>
          <img src={LogoWKB} alt="LogoWKB" />
          <div className={Styles.contact}>
            <p>Contact</p>
            <div className={Styles.social}>
              <AiOutlineMail className={Styles.mail} />
              <AiOutlineWhatsApp className={Styles.whatsApp} />
              <AiOutlineInstagram className={Styles.instagram} />
              <FaLinkedinIn className={Styles.linkedinIn} />
            </div>
          </div>
        </div>
        <div className={Styles.line}></div>
        <div>
          <h5>Copyright ©2023 WKB.GAMING</h5>
        </div>
      </div>
    </footer>
  );
};
