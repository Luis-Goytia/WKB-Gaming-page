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
              <a
                href="#"
                onClick={() =>
                  window.open(
                    "mailito:hola.wkb@gmail.com",
                    "_blank",
                    "width=600,height=400,left=100,top=100"
                  )
                }
              >
                <AiOutlineMail className={Styles.mail} />
              </a>
              <a
                href="#"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send/?phone=543875336241&text&type=phone_number&app_absent=0"
                  )
                }
              >
                <AiOutlineWhatsApp className={Styles.whatsApp} />
              </a>
              <a
                href="#"
                onClick={() =>
                  window.open("https://www.instagram.com/wkbgaming/")
                }
              >
                <AiOutlineInstagram className={Styles.instagram} />
              </a>
              <a
                href="#"
                onClick={() =>
                  window.open("https://www.linkedin.com/company/wkbgaming/")
                }
              >
                <FaLinkedinIn className={Styles.linkedinIn} />
              </a>
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
