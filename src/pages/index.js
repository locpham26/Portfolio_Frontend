import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/section/Hero";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  padding: 0px 10%;
  height: auto;
  box-sizing: border-box;
`;

const IndexPage = ({ location }) => {
  console.log(location);
  return (
    <Layout location={location}>
      <StyledMain>
        <Hero />
      </StyledMain>
    </Layout>
  );
};

export default IndexPage;
