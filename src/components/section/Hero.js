import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  min-height: 100vh;
  justify-content: space-between;
`;

const StyledInfoContainer = styled.div`
  flex-basis: 50%;
  .hero-image {
    width: 100%;
    position: relative;
    border-radius: var(--border-radius);
  }
`;

const StyledGreeting = styled.div`
  flex-basis: 40%;
  height: 60px;
  background-color: red;
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <StyledInfoContainer>
        <StaticImage
          className="hero-image"
          src="../../images/hero.jpeg"
          alt="hero"
        ></StaticImage>
      </StyledInfoContainer>
      <StyledGreeting />
    </StyledHeroSection>
  );
};

export default Hero;
