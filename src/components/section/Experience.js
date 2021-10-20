import React, { useState } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { firstAnimation, secondAnimation } from "../animation";
import Lottie from "react-lottie-player";
import WithView from "../hooks/withView";

const StyledExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 192px;
  .inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 48px;
  }
`;

const StyledTabsContainer = styled.div`
  align-self: flex-start;
  width: 100%;
  margin: 24px 0px;
  .tab-list {
    display: flex;
    align-items: center;
    gap: 8px;
    list-style: none;
    margin: 0;
    padding: 0;
    &:before {
      content: "";
      display: block;
      width: 100px;
      height: 2px;
      border-top: 2px dashed ${({ theme }) => theme.mainPurple};
    }
    &:after {
      content: "";
      flex: 1 1 auto;
      display: block;
      max-width: 100%;
      height: 2px;
      border-top: 2px dashed ${({ theme }) => theme.mainPurple};
    }
  }
`;

const StyledTab = styled.li`
  &:hover {
    color: ${({ theme }) => theme.mainPurple};
    background-color: #f6f4ff;
    transform: translateY(-4px);
  }
  padding: 12px 24px;
  border-radius: 32px;
  cursor: pointer;
  color: ${({ theme, active }) =>
    active ? "white" : theme.mainPurple} !important;
  background-color: ${({ active, theme }) =>
    active && theme.mainPurple} !important;
  border: 1px solid ${({ theme }) => theme.mainPurple};
  transition: 0.4s;

  font-weight: 500;
  position: relative;
`;

const StyledJobWrapper = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  width: 100%;
  align-items: flex-end;
  .job-inner {
    flex: 1 1 auto;
    border-radius: var(--border-radius);
    border: 1px solid #dddeee;
    min-height: 400px;
    padding: 40px;
    &:hover {
      box-shadow: 4px 4px 10px rgb(0 0 0 / 16%);
    }
    .organization-name {
      color: var(--primary-purple);
      font-weight: 500;
      font-size: 20px;
    }
    .position {
      color: var(--primary-text);
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 8px;
    }
    .period {
      color: var(--secondary-text);
      font-size: 18px;
      margin-bottom: 24px;
    }
  }
  .image-wrapper {
    flex: 0 0 auto;
  }
`;

const StyledJobDescription = styled.ul`
  max-width: 100%;
  list-style: none;
  margin: 0px;
  padding: 0px;
  li {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 8px;
    font-size: 16px;
    color: var(--primary-text);
    box-sizing: border-box;
    margin-bottom: 16px;
    .bullet {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.mainBlue};
      position: relative;
      top: 8px;
      left: 4px;
    }
  }
`;

const animationList = [
  <Lottie
    play
    loop
    animationData={firstAnimation}
    style={{ width: 560, height: 400 }}
  />,
  <Lottie
    play
    loop
    animationData={secondAnimation}
    style={{ width: 560, height: 400 }}
  />,
];

const textVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
    },
  },
};

const Experience = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query);
  const [activeJob, setActiveJob] = useState(0);
  return (
    <StyledExperienceSection id="experience">
      <div className="section-title">Experience</div>
      <WithView initial="hidden" variants={textVariant} animation="show">
        <div className="inner">
          <StyledTabsContainer>
            <ul className="tab-list">
              {jobs.map((item, index) => (
                <StyledTab
                  key={item.company}
                  onClick={() => setActiveJob(index)}
                  active={index === activeJob}
                >
                  {item.company}
                </StyledTab>
              ))}
            </ul>
          </StyledTabsContainer>
          {jobs.map((item, index) => (
            <StyledJobWrapper key={index} active={index === activeJob}>
              <div className="image-wrapper">{animationList[index]}</div>
              <div className="job-inner">
                <span className="position">{item.position} </span>
                <span className="organization-name">@{item.company}</span>
                <div className="period">{item.duration}</div>
                <StyledJobDescription>
                  {item.description.map((desc) => (
                    <li key={desc.id}>
                      <span className="bullet"></span>
                      {desc.detail}
                    </li>
                  ))}
                </StyledJobDescription>
              </div>
            </StyledJobWrapper>
          ))}
        </div>
      </WithView>
    </StyledExperienceSection>
  );
};

export const query = graphql`
  {
    allStrapiJobs {
      nodes {
        company
        duration
        position
        description {
          detail
          id
        }
        strapiId
      }
    }
  }
`;

export default Experience;
