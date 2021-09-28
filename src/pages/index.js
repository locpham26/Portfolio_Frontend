import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/section/Hero";
import About from "../components/section/About";
import Experience from "../components/section/Experience";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <About />
      <Experience />
    </Layout>
  );
};

export default IndexPage;
