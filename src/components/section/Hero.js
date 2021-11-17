import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import BackgroundAnimation from "../BackgroundAnimation";
import { MailIcon } from "../icons";
import { motion } from "framer-motion";

const StyledHeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  margin-bottom: 96px;
  background-color: ${({ theme }) => theme.mainDark};
  .inner {
    min-height: 100vh;
    width: 80%;
    max-width: 1800px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    @media only screen and (${({ theme }) => theme.bp.laptopS}) {
      flex-direction: column-reverse;
      justify-content: center;
      width: 90%;
      .hero-image-wrapper {
        margin-bottom: 48px;
      }
    }
    .hero-image-wrapper {
      /* flex: 0 0 280px; */
      width: 280px;
      height: 280px;
      border-radius: 50%;
      position: relative;
      .hero-image-decoration {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.mainTeal};
      }
      .hero-image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: relative;
      }
      .hero-animation {
        position: absolute;
        top: -50%;
        left: -50%;
        svg {
          width: 560px;
          height: 560px;
        }
      }
    }

    .hero-info-wrapper {
      max-width: 60%;
      @media only screen and (${({ theme }) => theme.bp.laptopS}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .hero-info-greet {
        color: ${({ theme }) => theme.mainTeal};
        font-family: var(--font-sans);
        font-weight: 500;
        font-size: 18px;
      }
      .hero-info-name {
        font-weight: 600;
        font-size: 48px;
        color: ${({ theme }) => theme.mainLightText};
        font-family: var(--font-sans-serif);
        margin: 16px 0px;
      }
      .hero-info-desc {
        color: ${({ theme }) => theme.secondLightText};
        font-weight: 500;
        font-size: 20px;
      }
      .resume-button {
        padding: 16px 24px;
        width: fit-content;
        border: 1px solid ${({ theme }) => theme.mainTeal};
        color: ${({ theme }) => theme.mainTeal};
        background-color: transparent;
        font-size: 20px;
        display: flex;
        align-items: center;
        text-decoration: none;
        justify-content: center;
        cursor: pointer;
        margin: 32px 0px;
        border-radius: var(--border-radius);
        box-shadow: inset 0 0 20px rgba(27, 232, 224, 0);
        outline: 1px solid;
        outline-color: rgba(27, 232, 224, 0.5);
        outline-offset: 0px;
        text-shadow: none;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
        &:hover {
          box-shadow: inset 0 0 20px rgba(27, 232, 224, 0.5),
            0 0 20px rgba(27, 232, 224, 0.2);
          outline-color: rgba(27, 232, 224, 0);
          outline-offset: 15px;
          text-shadow: 1px 1px 2px #427388;
        }
      }
      .email-wrapper {
        display: flex;
        align-items: center;
        width: fit-content;
        &:hover {
          a {
            color: ${({ theme }) => theme.mainTeal};
          }
          svg {
            fill: ${({ theme }) => theme.mainTeal};
          }
        }
        a {
          color: ${({ theme }) => theme.secondLightText};
          text-decoration: none;
          font-size: 20px;
          font-weight: 500;
        }
        svg {
          fill: ${({ theme }) => theme.secondLightText};
          margin-right: 16px;
        }
      }
    }
  }
`;

const imageDecorationVariants = {
  rest: {
    opacity: 0,
    scale: 1,
  },
  hover: {
    opacity: [1, 0.5, 0],
    scale: 1.5,
    transition: {
      duration: 0.8,
    },
  },
};

const email = "locpham2602@gmail.com";

const Hero = () => {
  return (
    <StyledHeroSection id="hero">
      <div className="inner">
        <div className="hero-info-wrapper">
          <h1 className="hero-info-greet">
            Welcome to my personal portfolio. My name is
          </h1>
          <h2 className="hero-info-name">Loc Pham.</h2>
          <p className="hero-info-desc">
            I am a software engineer who builds user-friendly and functional
            software. I care deeply about building applications that are usable
            and pleasant for the most number of users possible.
          </p>
          <a
            className="resume-button"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my resume
          </a>
          <div className="email-wrapper">
            <MailIcon />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div
            className="hero-image-decoration"
            variants={imageDecorationVariants}
          ></motion.div>
          <div className="hero-animation">
            <BackgroundAnimation />
          </div>
          <StaticImage
            src="../../images/hero.jpeg"
            alt="hero"
            className="hero-image"
          />
        </motion.div>
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
