import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import GetInTouch from "../components/Get In Touch/GetInTouch";
import Heading from "../components/Heading/Heading";
import NavBar from "../components/Nav Bar/NavBar";
import OurWork from "../components/Our Work/OurWork";
import Services from "../components/Services/Services";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="pt-6 children:px-44 bg-r-main text-r-dark overflow-hidden">
      <Head>
        <title>RightUp</title>
        <meta
          name="description"
          content="Rightup is the place where you want to be if you want to boost, optimize or create your brand  whatever it’s core business and mission is!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Heading />

      <Services />

      <OurWork />

      <About />

      <GetInTouch />

      <Footer />
    </div>
  );
}
