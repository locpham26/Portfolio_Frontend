import React from "react";
import styled from "styled-components";
import { DesignIcon, MobileIcon, WebIcon } from "../icons";
import { motion } from "framer-motion";
import WithView from "../hooks/withView";
import SectionTitle from "../SectionTitle";
import { graphql, useStaticQuery } from "gatsby";

const StyledAboutSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 128px;
  .inner {
    width: 80%;
    margin: 0 auto;
    .inner-info {
      display: flex;
      gap: 48px;
    }
  }
`;

const StyledAboutInfo = styled.div`
  flex: 0 0 400px;
  .info-text {
    font-size: 16px;
    color: var(--secondary-text);
    margin-bottom: 24px;
  }
`;

const StyledSkillList = styled.div`
  /* flex: 1 1 auto; */
  box-sizing: border-box;
  .skill-box-inner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 48px;
  }
`;

const StyledSkillCard = styled.div`
  border-radius: var(--border-radius);
  border: 1px solid #dddeee;
  background-color: white;
  max-width: calc(50% - 48px);
  &:hover {
    box-shadow: 4px 4px 10px rgb(0 0 0 / 16%);
  }
  .skill-card-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    padding: 24px;
    border-radius: var(--border-radius);
    .icon-wrapper {
      width: 48px;
      height: 48px;
      background-color: ${({ theme }) => theme.mainPurple};
      border-radius: var(--border-radius);
      ${({ theme }) => theme.mixins.flexCenter};
      box-sizing: border-box;
      margin-bottom: 24px;
    }
    .title {
      font-weight: 500;
      font-size: 20px;
      box-sizing: border-box;
      color: var(--primary-text);
      font-family: var(--font-sans-serif);
      margin-bottom: 16px;
      text-align: center;
    }
    .description {
      color: var(--primary-text);
      font-size: 16px;
      text-align: center;
      color: var(--secondary-text);
      margin-bottom: 16px;
    }
    .tool-title {
      color: ${({ theme }) => theme.mainPurple};
    }
  }
`;

const skillItems = [
  {
    key: "web",
    title: "Web Development",
    description:
      "Developing fast and artistically pleasing web applications has been a passion for me.",
    icon: <WebIcon />,
  },
  {
    key: "mobile",
    title: "Mobile Development",
    description:
      "Creating user-friendly and cross-platform mobile applications is my recent work.",
    icon: <MobileIcon />,
  },
  {
    key: "design",
    title: "UI UX Design",
    description:
      "Driven by the desire to provide the best experience for users, I work meticulously on UI/UX design.",
    icon: <DesignIcon />,
  },
];

const textVariant = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const About = () => {
  const {
    allStrapiIntro: { nodes: intro },
  } = useStaticQuery(query);
  const info = intro[0].info;
  return (
    <StyledAboutSection id="about">
      <div className="inner">
        <SectionTitle
          title="1. About Me"
          subtitle="Some information about myself"
        />
        <div className="inner-info">
          <StyledAboutInfo>
            <WithView initial="hidden" variants={textVariant} animation="show">
              <p className="info-text">
                I am currently a senior majoring in Computer Science at Texas
                Christian University. I expect to graduate on May 2022.{" "}
              </p>
              <p className="info-text">
                My interest in software development started when I built an
                online board game with a group of friends. It was a valuable
                experience that taught me a lot about HTML, CSS, and Vue.js.
                Then, I dived deeply into learning web development, mobile
                development, and UI/UX design so that I can deliver aesthetic
                and optimized applications.
              </p>
              <p className="info-text">
                I've had the opportunities to work at an outsourcing company, a
                corporation, and a start-up. Currently, I'm looking for any
                available positions in software development.
              </p>
            </WithView>
          </StyledAboutInfo>
          <StyledSkillList>
            <WithView initial="hidden" variants={textVariant} animation="show">
              <div className="skill-box-inner">
                {skillItems.map((item, index) => (
                  <StyledSkillCard key={item.key}>
                    <div className="skill-card-inner">
                      <div className="icon-wrapper">{item.icon}</div>
                      <div className="title">{item.title}</div>
                      <div className="description">{item.description}</div>
                      <div className="tool-title">Tools I use</div>
                      <ul></ul>
                    </div>
                  </StyledSkillCard>
                ))}
              </div>
            </WithView>
          </StyledSkillList>
        </div>
      </div>
    </StyledAboutSection>
  );
};

export const query = graphql`
  {
    allStrapiIntro {
      nodes {
        info
      }
    }
  }
`;

export default About;
