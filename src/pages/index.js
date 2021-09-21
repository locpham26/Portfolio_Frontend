import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/section/Hero";
import styled from "styled-components";
import About from "../components/section/About";

const StyledMain = styled.main`
  width: 100%;
  padding: 0px 15%;
  height: auto;
  box-sizing: border-box;
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
