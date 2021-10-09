import React from "react";
import styled from "styled-components";
import { DeveloperIcon, EngineerIcon, Decoration } from "../icons";
import { graphql, useStaticQuery } from "gatsby";

const StyledExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const StyledJobList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
`;

const StyledJobItem = styled.li`
  margin-bottom: 48px;
  .item-inner {
    position: relative;
    display: flex;
    flex-direction: ${({ isOdd }) => (isOdd ? "row" : "row-reverse")};
    align-items: center;
    gap: 96px;
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

const imageList = [<DeveloperIcon />, <EngineerIcon />];

const Experience = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query);
  return (
    <StyledExperienceSection id="experience">
      <div className="section-title">Experience</div>
      <StyledJobList>
        {jobs.map((item, index) => (
          <StyledJobItem key={item.strapiId} isOdd={(index + 1) % 2 !== 0}>
            <div className="item-inner">
              <StyledJobImageContainer>
                {imageList[index]}
              </StyledJobImageContainer>
              <StyledJobDescriptionWrapper>
                <p className="position">
                  {item.position}
                  <span className="organization-name"> @{item.company}</span>
                </p>
                <p className="period">{item.duration}</p>
                <StyledJobDescription>
                  {item.description.map((desc) => (
                    <li key={desc.id}>
                      <span className="bullet" />
                      {desc.detail}
                    </li>
                  ))}
                </StyledJobDescription>
              </StyledJobDescriptionWrapper>
            </div>
          </StyledJobItem>
        ))}
      </StyledJobList>
    </StyledExperienceSection>
  );
};

export default Experience;
