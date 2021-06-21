import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Homepage from "../components/Homepage/Homepage";
import About from "../components/About/About";
import Hire from "../components/Hire/Hire";
import Footer from "../components/Footer/Footer";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Homepage></Homepage>
      <About></About>
      <Hire></Hire>
      <Projects></Projects>
      <Footer></Footer>
    </Layout>
  );
};

export default Home;
