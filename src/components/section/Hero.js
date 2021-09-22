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
    grid-template-columns: 1fr 1fr;
    gap: 96px;
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeroImageContainer = styled.div`
  max-width: 400px;
  position: relative;
  border-radius: var(--border-radius);
  .hero-image {
    width: 100%;
    z-index: 1;
    border-radius: var(--border-radius);
  }
  .bottom-decoration {
    position: absolute;
    left: 84%;
    top: 84%;
    border-radius: var(--border-radius);
    background-color: var(--primary-teal);
    width: 20%;
    height: 20%;
  }
  .top-decoration {
    position: absolute;
    right: 7%;
    bottom: 7%;
    border-radius: var(--border-radius);
    border: 3px solid var(--primary-teal);
    width: 100%;
    height: 100%;
  }
  @media screen and (${({ theme }) => theme.bp.desktopM}) {
    max-width: 800px;
  }
  @media screen and (${({ theme }) => theme.bp.laptopM}) {
    max-width: 640px;
  }
`;

const StyledGreeting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    margin-bottom: 16px;
    box-sizing: border-box;
  }
  .greet {
    font-size: 32px;
    color: white;
    background-color: var(--primary-teal);
    border-radius: 32px 32px 32px 0px;
    padding: 16px;
    width: fit-content;
  }
  .name {
    font-size: 64px;
    font-weight: 600;
    color: var(--primary-teal);
  }
  .title {
    font-size: 56px;
    color: var(--primary-text);
  }
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <div className="inner">
        <StyledInfoContainer>
          <StyledHeroImageContainer>
            <div className="top-decoration"></div>
            <StaticImage
              className="hero-image"
              src="../../images/hero.jpeg"
              alt="hero"
            />
            <div className="bottom-decoration"></div>
          </StyledHeroImageContainer>
        </StyledInfoContainer>
        <StyledGreeting>
          <p className="greet">Hi, my name is</p>
          <p className="name">Loc Pham.</p>
          <p className="title">I am a software engineer.</p>
        </StyledGreeting>
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
