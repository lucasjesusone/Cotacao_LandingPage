import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import "../footer/footer.css";
import LandingContext from "../../context/context";

const Footer = () => {
  const { footer } = useContext(LandingContext);
  const { footerMap } = footer;

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
    <footer className="footer">
      <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={500}>
        <p className="title-footer">
          © {new Date().getFullYear()} - Developed by{" "}
          <i className="footerName">Lucas Gabriel de Jesus</i>
        </p>
      </Fade>
      <ul className="footer-list">
        {footerMap &&
          footerMap.map(function (item) {
            const { id, url, icon, icon1 } = item;
            return (
              <li key={id}>
                <Fade
                  bottom={isDesktop}
                  right={isMobile}
                  duration={1000}
                  delay={800}
                >
                  <a
                    className="footericon"
                    href={
                      url || "https://www.linkedin.com/in/lucasgabrieljesus/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                    {icon1}
                  </a>
                </Fade>
              </li>
            );
          })}
        <span>
          <Link to="mapHeader" smooth duration={1000}>
            <i
              className="fa fa-angle-up fa-2x"
              aria-hidden="true"
              id="topFooter"
            />
          </Link>
        </span>
      </ul>
    </footer>
  );
};

export default Footer;
