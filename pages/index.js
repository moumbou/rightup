import React from "react";
import Head from "next/head";
import About from "../components/About/About";
import ButtonScrollUp from "../components/ButtonScrollUp";
import Footer from "../components/Footer/Footer";
import GetInTouch from "../components/Get In Touch/GetInTouch";
import Heading from "../components/Heading/Heading";
import NavBar from "../components/Nav Bar/NavBar";
import OurWork from "../components/Our Work/OurWork";
import Services from "../components/Services/Services";

export default function Home() {
  const [scrolled, setScroll] = React.useState(false);
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      let top = window.pageYOffset;
      if (top > 0) setScroll(true);
      else setScroll(false);

      let services = document
        .getElementById("services")
        .getBoundingClientRect().top;
      if (services > 100) setDisplay(false);
      else setDisplay(true);
    };
  }, []);

  return (
    <div className="pt-32 children:px-44 bg-r-main text-r-dark overflow-hidden relative">
      <Head>
        <title>RightUp</title>
        <meta
          name="description"
          content="Rightup is the place where you want to be if you want to boost, optimize or create your brand  whatever it’s core business and mission is!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ButtonScrollUp display={display} />

      <NavBar display={scrolled} />

      <Heading />

      <Services />

      <OurWork />

      <About />

      <GetInTouch />

      <Footer />
    </div>
  );
}
