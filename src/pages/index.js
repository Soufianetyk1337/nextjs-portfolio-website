import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Technologies from "../components/Technologies/Technologies";
import Homepage from "../components/Homepage/Homepage";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import { Layout } from "../layout/Layout";
import React from "react";
import loadable from "@loadable/component";

const Projects = loadable(() => import("../components/Projects/Projects"));

const Home = () => {
  return (
    <Layout>
      <Homepage></Homepage>
      <About></About>
      <Technologies />
      <Projects />
      <Footer></Footer>
    </Layout>
  );
};

export default Home;
