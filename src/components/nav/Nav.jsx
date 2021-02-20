import React, { useState, useContext, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import "../../components/nav/nav.css";
import LandingContext from "../../context/context";

import { Button } from "./Button";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const onHandleClick = () => {
    setClicked(!clicked);
  };

  const { nav } = useContext(LandingContext);
  const { navbar } = nav;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      <nav className="navbar" id="nav">
        <Fade left={isDesktop} right={isMobile} duration={1000} delay={500}>
          <div className="navbar-logo">
            <h1>COTAR.ME</h1>
          </div>
        </Fade>
        <div className="menu-icon" onClick={onHandleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {navbar &&
            navbar.map((item) => {
              const { id, url, boxText } = item;

              return (
                <li
                  key={id}
                  rel="noopener noreferrer"
                  onClick={() => setClicked(false)}
                >
                  <Fade
                    right={isDesktop}
                    left={isMobile}
                    duration={1000}
                    delay={500}
                  >
                    <Link
                      to={url}
                      smooth
                      duration={1000}
                      className="nav-links"
                      onClick={() => setClicked(false)}
                    >
                      {boxText || ""}
                    </Link>
                  </Fade>
                </li>
              );
            })}

          <a
            href="https://www.youtube.com/watch?v=L7Rh_gkJT6M"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Login</Button>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
