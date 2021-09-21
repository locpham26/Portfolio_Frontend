import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const StyledHeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  .inner {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 48px;
  }
`;

const StyledInfoContainer = styled.div`
  .hero-image {
    width: 100%;
    max-width: 400px;
    position: relative;
    border-radius: var(--border-radius);
  }
`;

const StyledGreeting = styled.div`
  height: 60px;
  background-color: red;
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <div className="inner">
        <StyledInfoContainer>
          <StaticImage
            className="hero-image"
            src="../../images/hero.jpeg"
            alt="hero"
          ></StaticImage>
        </StyledInfoContainer>
        <StyledGreeting />
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
