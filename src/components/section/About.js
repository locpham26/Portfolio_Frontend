import React from "react";
import styled from "styled-components";
import { DesignIcon, MobileIcon, WebIcon, BackendIcon } from "../icons";
// import { motion } from "framer-motion";
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
    max-width: 1600px;
    .inner-info {
      display: flex;
      gap: 48px;
      @media only screen and (${({ theme }) => theme.bp.laptopM}) {
        flex-direction: column;
      }
    }
  }
`;

const StyledAboutInfo = styled.div`
  flex: 0 0 400px;
  @media only screen and (${({ theme }) => theme.bp.laptopM}) {
    flex: 0 0 auto;
  }
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
  width: calc(50% - 48px);
  @media only screen and (${({ theme }) => theme.bp.tabletL}) {
    width: 100%;
  }

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
      margin-bottom: 24px;
    }
    .tool-title {
      color: ${({ theme }) => theme.mainPurple};
      margin-bottom: 16px;
    }
    .tool-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      li {
        color: ${({ theme }) => theme.mainPurple};
      }
    }
  }
`;

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
    allStrapiSkills: { nodes: skills },
  } = useStaticQuery(query);
  const iconList = [
    <WebIcon />,
    <MobileIcon />,
    <DesignIcon />,
    <BackendIcon />,
  ];
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
                {skills.map((item, index) => (
                  <StyledSkillCard key={item.strapiId}>
                    <div className="skill-card-inner">
                      <div className="icon-wrapper">{iconList[index]}</div>
                      <div className="title">{item.name}</div>
                      <div className="description">{item.description}</div>
                      <ul className="tool-list">
                        {item.tool.map((t) => (
                          <li key={t.id}>{t.name}</li>
                        ))}
                      </ul>
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
    allStrapiSkills {
      nodes {
        strapiId
        name
        description
        tool {
          id
          name
        }
      }
    }
  }
`;

export default About;
