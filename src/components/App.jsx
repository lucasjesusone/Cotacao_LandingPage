import React, { useState, useEffect } from "react";
import Nav from "./nav/Nav";
import Header from "./header/Header";
import About from "./about/About";
import Main from "./main/Main";
import Mission from "./mission/Mission";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { Container } from "./styled";

import { LandingProvider } from "../context/context";

import {
  navData,
  headerData,
  aboutData,
  mainData,
  missionData,
  contactData,
  footerData,
} from "../mock/data";

function App() {
  const [nav, setNav] = useState({});
  const [header, setHeader] = useState({});
  const [about, setAbout] = useState({});
  const [main, setMain] = useState({});
  const [mission, setMission] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNav({ ...navData });
    setHeader({ ...headerData });
    setAbout({ ...aboutData });
    setMain({ ...mainData });
    setMission({ ...missionData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <LandingProvider
      value={{ main, about, nav, header, mission, contact, footer }}
    >
      <Container>
        <Nav />
        <Header />
        <About />
        <Main />
        <Mission />
        <Contact />
        <Footer />
      </Container>
    </LandingProvider>
  );
}
export default App;
