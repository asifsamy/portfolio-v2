import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";

export default function Navbar() {
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
    <nav className={classes.nav}>
      {(toggleMenu || screenWidth > 760) && (
        <ul className={classes.list}>
          <div className={classes.title}>Asif Al - Samy</div>
          <li className={classes.items}>
            <a className={classes.link} href="!#">
              About
            </a>
          </li>
          <li className={classes.items}>
            <a className={classes.link} href="!#">
              Skills
            </a>
          </li>
          <li className={classes.items}>
            <a className={classes.link} href="!#">
              Experience
            </a>
          </li>
          <li className={classes.items}>
            <a className={classes.link} href="!#">
              Education
            </a>
          </li>
          <li className={classes.items}>
            <a className={classes.link} href="!#">
              Projects
            </a>
          </li>
          <li className={classes.items}>
            <a className={classes.link} href="!#">
              Contact
            </a>
          </li>
        </ul>
      )}

      <button className={classes.btn} onClick={toggleNavHandler}>
        BTN
      </button>
    </nav>
  );
}
