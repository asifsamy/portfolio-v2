import profileImage from "../assets/profile-pic.jpeg";
import { BiBriefcase, BiMap } from "react-icons/bi";
import { IconContext } from "react-icons";
import { ImMail } from "react-icons/im";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import Card from "./UI/Card";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about} id="about">
      <Card>
        <div className={classes.centered}>
          <img src={profileImage} alt="My Image" />
        </div>
        <div className={classes.centered}>
          <div className={classes.name}>Asif Al-Samy</div>
        </div>
        <div className={classes.content}>
          <div className={classes.heading}>
            <div className={classes["box-icon"]}>
              <BiBriefcase />
            </div>
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Software Engineer", "Web Application Developer"]}
            />
          </div>
          <div className={classes.heading}>
            <div className={classes["box-icon"]}>
              <BiMap />
            </div>
            <div>Duisburg, Germany</div>
          </div>
          <p>
            I am a Software Engineer and currently studying Information
            Engineering and Computer Science (M.Sc.) in Rhine-Waal University of
            Applied Science, Germany. I worked as a Software Engineer (Backend
            developer on PHP-Laravel) in Techvillage Ltd Bangladesh. Building
            usable, better and reactive Web App is truly a passion of mine. I
            actively seek out new technologies and stay up-to-date on industry
            trends and advancements. Also love to share my knowledge to others
            and contribute to the community.
          </p>
        </div>
        <div className={classes.connect}>
          <div
            className={`${classes.heading} ${classes.centered} ${classes["text-heighlight"]}`}
          >
            Get In Touch
          </div>
          <div className={classes.centered}>
            <IconContext.Provider
              value={{ size: "1.5rem", color: "rgb(115, 93, 134)" }}
            >
              <div className={classes["connect-icon"]}>
                <a href="mailto:alsamy.asif@gmail.com">
                  <ImMail />
                </a>
              </div>
              <div className={classes["connect-icon"]}>
                <a
                  href="https://www.linkedin.com/in/s-m-asif-al-samy-80bb3510b/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className={classes["connect-icon"]}>
                <a href="https://github.com/asifsamy" target="_blank">
                  <FaGithubSquare />
                </a>
              </div>
              <div className={classes["connect-icon"]}>
                <a href="https://www.facebook.com/asif.samy1" target="_blank">
                  <FaFacebookSquare />
                </a>
              </div>
              <div className={classes["connect-icon"]}>
                <a href="https://www.instagram.com/asif.samy/" target="_blank">
                  <FaInstagramSquare />
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default About;
