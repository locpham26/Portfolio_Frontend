import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/section/Hero";
import About from "../components/section/About";
import Experience from "../components/section/Experience";
import Projects from "../components/section/Projects";
import Gallery from "../components/section/Gallery";
import Contacts from "../components/section/Contacts";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Gallery />
      <Contacts />
    </Layout>
  );
};

export default IndexPage;
