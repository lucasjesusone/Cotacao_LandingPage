import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import LandingProvider from "../../context/context";
import "../contact/contact.css";
import Form from "../form/Form";

const Contact = () => {
  const { contact } = useContext(LandingProvider);
  const { titleContact } = contact;

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
    <div id="contact">
      <section>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500}>
          <h2>{titleContact || "olá"}</h2>
        </Fade>

        <Fade right={isDesktop} bottom={isMobile} duration={1500} delay={500}>
          <Form />
        </Fade>
      </section>
    </div>
  );
};

export default Contact;
