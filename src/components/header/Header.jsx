import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import LandingProvider from "../../context/context";
import "../header/header.css";

const Header = () => {
  const { header } = useContext(LandingProvider);
  const { title, url, text, button } = header;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <header className="header" id="mapHeader">
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={500}
        distance="40px"
      >
        <div className="head">
          <h1 className="title-header">
            {title}
            <br />
            CHANGING THE WORLD
          </h1>
          <div>
            <div>
              <p className="message">{text}</p>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1800}
                delay={800}
              >
                <Link
                  to="contact"
                  smooth
                  duration={1000}
                  className="contact"
                  href={url}
                >
                  {button || "Contact us"}
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </header>
  );
};

export default Header;
