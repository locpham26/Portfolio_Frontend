import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { StaticImage } from "gatsby-plugin-image";
import { MailIcon, PhoneIcon } from "../icons";

const StyledHeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
`;

const StyledHeroBackground = styled(BackgroundImage)`
  width: 100%;
  height: 350px;
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const StyledHeroInfo = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  .hero-image-wrapper {
    position: relative;
    bottom: 120px;
    .hero-image {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      z-index: 2;
    }
    /* &::before {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 3px solid var(--primary-purple);
      position: absolute;
      bottom: 12px;
      right: 12px;
      z-index: 1;
    } */
  }
  .hero-info-wrapper {
    position: relative;
    top: 72px;
    > * {
      box-sizing: border-box;
      margin-bottom: 12px;
    }
    .greet {
      border-radius: 32px 0px 32px 0px;
      background-color: var(--primary-purple);
      padding: 12px 24px;
      text-align: center;
      color: white;
      width: fit-content;
    }
    .name {
      font-weight: 500;
      font-size: 32px;
      color: var(--primary-text);
    }
    .title {
      color: var(--secondary-text);
      font-weight: 500;
      font-size: 20px;
    }
    .contact {
      font-weight: 500;
      font-size: 16px;
      color: var(--primary-text);
      display: flex;
      svg {
        margin-right: 16px;
      }
    }
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return (
    <StyledHeroSection id="hero">
      <StyledHeroBackground fluid={image.childImageSharp.fluid}>
        <div className="overlay"></div>
      </StyledHeroBackground>
      <StyledHeroInfo>
        <div className="hero-info-wrapper">
          <p className="greet">Hello, I'm</p>
          <p className="name">Loc Pham</p>
          <p className="title">
            Software Engineer / Full-stack Developer / UI UX Designer
          </p>
          <p className="contact">
            <MailIcon />
            <span>loc.pham@tcu.edu</span>
          </p>
          <p className="contact">
            <PhoneIcon />
            <span>(682) 306-2310</span>
          </p>
        </div>
        <div className="hero-image-wrapper">
          <StaticImage
            src="../../images/hero.jpeg"
            alt="hero"
            className="hero-image"
          />
        </div>
      </StyledHeroInfo>
    </StyledHeroSection>
  );
};

export default Hero;
