import { Fragment, useState, useEffect } from "react";
import { Link } from "react-scroll";

import classes from "./Header.module.css";

const Header = (props) => {
  // const toggleButton = document.getElementsByClassName("toggle-button")[0];
  // const navLinks = document.getElementsByClassName("nav-links")[0];

  // toggleButton.addEventListener("click", () => {
  //   navLinks.classList.toggle("active");
  // });

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNavHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    // cleanup function
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <Fragment>
      <header>
        <nav className={classes.navbar}>
          <div className={classes.title}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Asif Al-Samy
            </Link>
          </div>
          {(toggleMenu || screenWidth > 760) && (
            <div className={classes["nav-links"]}>
              <ul>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    SKILLS
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div onClick={toggleNavHandler} className={classes["toggle-button"]}>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
