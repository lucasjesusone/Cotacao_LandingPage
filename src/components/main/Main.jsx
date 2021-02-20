import React, { useContext, Fragment, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import "../main/main.css";
import LandingContext from "../../context/context";

const Main = () => {
  const { main } = useContext(LandingContext);
  const { mainMap } = main;

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
    <main id="main">
      <div>
        <div className="services">
          {mainMap &&
            mainMap.map(function (item) {
              const { icon, title, text, id } = item;
              return (
                <Fragment key={id}>
                  <Fade
                    bottom={isDesktop}
                    left={isMobile}
                    duration={1000}
                    delay={600}
                  >
                    <div className="service-one">
                      <p className="service-icon">{icon}</p>
                      <p className="service-title">{title || "sla"}</p>
                      <p>{text}</p>
                    </div>
                  </Fade>
                </Fragment>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Main;
