import { IoMdMail } from "react-icons/io";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="centered">
        <IconContext.Provider
          value={{ size: "0.85rem", color: "rgb(115, 93, 134)" }}
        >
          <a href="mailto:alsamy.asif@gmail.com">
            <IoMdMail />
          </a>
          <a
            href="https://www.linkedin.com/in/s-m-asif-al-samy-80bb3510b/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/asifsamy" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/asif.samy1" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/asif.samy/" target="_blank">
            <FaInstagram />
          </a>
        </IconContext.Provider>
      </div>
      <p className="centered">Ⓒ 2022 Asif Al-Samy</p>
    </footer>
  );
};

export default Footer;
