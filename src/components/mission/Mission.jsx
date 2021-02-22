import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import LandingProvider from "../../context/context";
import "../mission/mission.css";

const Mission = () => {
  const { mission } = useContext(LandingProvider);
  const { title, paragraph1, paragraph2 } = mission;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div className="divMission" id="mission">
      <section className="sectionMission">
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500}>
          <div>
            <h2 className="title">{title || "Something"}</h2>
          </div>
        </Fade>
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500}>
          <div>
            <p className="paragraph">{paragraph1 || "something"}</p>
            <p className="paragraph">{paragraph2 || "something"}</p>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Mission;
