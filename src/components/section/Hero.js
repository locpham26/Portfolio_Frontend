import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { StaticImage } from "gatsby-plugin-image";
import { MailIcon, PhoneIcon } from "../icons";
import { motion } from "framer-motion";

const StyledHeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  margin-bottom: 48px;
`;

const StyledHeroBackground = styled(BackgroundImage)`
  width: 100%;
  height: 350px;
  @media screen and (${({ theme }) => theme.bp.desktopM}) {
    height: 600px;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const StyledHeroDecoration = styled(motion.div)`
  position: absolute;
  z-index: 3;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.mainBlue};
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
      @media screen and (${({ theme }) => theme.bp.desktopM}) {
        height: 400px;
        width: 400px;
      }
    }
  }
  .hero-info-wrapper {
    position: relative;
    top: 72px;
    @media screen and (${({ theme }) => theme.bp.desktopM}) {
      top: 144px;
    }
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

const parentVariant = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const variants = {
  start: {
    scale: 1,
    opacity: 0,
  },
  end: {
    scale: 1.4,
    opacity: [0.5, 1, 0],
    transition: {
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut",
      repeatDelay: 0.2,
    },
  },
};

const variants2 = {
  start: {
    scale: 1,
    opacity: 0,
  },
  end: {
    scale: 1.4,
    opacity: [0.5, 1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      delay: 0.8,
      repeatDelay: 1,
      ease: "easeInOut",
    },
  },
};

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
          <StyledHeroDecoration
            variants={variants}
            initial="start"
            animate="end"
          />
          <StyledHeroDecoration
            variants={variants2}
            initial="start"
            animate="end"
          />
        </div>
      </StyledHeroInfo>
    </StyledHeroSection>
  );
};

export default Hero;
