import React from "react";
import styled from "styled-components";
import { DeveloperIcon, EngineerIcon, WorkIcon } from "../icons";
import { graphql, useStaticQuery } from "gatsby";

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
    align-items: center;
    width: 100%;
    gap: 48px;
  }
`;

const StyledJobImageContainer = styled.div`
  flex: 0 0 320px;
  max-width: 100%;
  max-height: 400px;
  svg {
    max-width: 100%;
    height: 100%;
  }
`;

const StyledJobDescriptionWrapper = styled.div`
  flex: 1 1 auto;
  padding: 40px;
  height: 100%;
  max-width: 100%;
  .organization-name {
    color: var(--primary-purple);
  }
  .position {
    color: var(--primary-text);
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 8px;
  }
  .period {
    color: var(--secondary-text);
    font-size: 18px;
    margin-bottom: 24px;
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

const StyledTabsContainer = styled.div`
  .tab-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const StyledTab = styled.li`
  padding: 12px 24px;
  box-sizing: border-box;
  margin-right: 16px;
  border-radius: 32px;
  cursor: pointer;
  color: ${({ active, theme }) => (active ? theme.mainPurple : "grey")};
  background-color: ${({ active }) => active && "#F3E8FF"};
  &:hover {
    color: ${({ theme }) => theme.mainPurple};
    background-color: #f3e8ff;
  }
  font-weight: 500;
  position: relative;
`;

const StyledJobWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  position: relative;

  .job-inner {
    border-radius: var(--border-radius);
    border: 1px solid #dddeee;
    height: 400px;
  }
  .image-wrapper {
    position: absolute;
    bottom: -100px;
    left: 75%;
    z-index: 2;
    height: 300px;
    svg {
      max-width: 100%;
      height: 100%;
    }
  }
`;

const Experience = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query);
  return (
    <StyledExperienceSection id="experience">
      <div className="section-title">Experience</div>
      <div className="inner">
        <StyledTabsContainer>
          <ul className="tab-list">
            <StyledTab active={true}>MISA JSC</StyledTab>
            <StyledTab>Eastgate Software</StyledTab>
          </ul>
        </StyledTabsContainer>
        <StyledJobWrapper>
          <div className="job-inner"></div>
          <div className="image-wrapper">
            <WorkIcon />
          </div>
        </StyledJobWrapper>
      </div>
    </StyledExperienceSection>
  );
};

export default Experience;
