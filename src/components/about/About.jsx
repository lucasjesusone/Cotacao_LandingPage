import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import LandingContext from "../../context/context";
import "../about/about.css";

const About = () => {
  const { about } = useContext(LandingContext);
  const { textabout, message } = about;

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
    <div id="about">
      <div className="about-us">
        <section className="intro">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500}>
            <h2 className="title">{textabout || "Lorem"}</h2>
          </Fade>
          <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500}>
            <div>
              <p className="textMessage">{message || "Lorem"}</p>
            </div>
          </Fade>
        </section>
      </div>
    </div>
  );
};

export default About;
