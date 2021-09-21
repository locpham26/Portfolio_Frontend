import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/section/Hero";
import styled from "styled-components";
import About from "../components/section/About";

const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  max-width: 1600px;
  margin: 0px auto;
  padding: 0px 150px;
`;

const IndexPage = ({ location }) => {
  console.log(location);
  return (
    <Layout location={location}>
      <StyledMain>
        <Hero />
        <About />
      </StyledMain>
    </Layout>
  );
};

export default IndexPage;
