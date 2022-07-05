import React from 'react';
import dynamic from 'next/dynamic';
import Technologies from '../src/components/Technologies/Technologies';
import Homepage from '../src/components/Homepage/Homepage';
import About from '../src/components/About/About';
import Footer from '../src/components/Footer/Footer';
import { Layout } from '../src/layout/Layout';

function Home() {
  const Projects = dynamic(() => import('../src/components/Projects/Projects'), { ssr: false });
  return (
    <Layout>
      <Homepage />
      <About />
      <Projects />
      <Technologies />
      <Footer />
    </Layout>
  );
}

export default Home;
