import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import WithView from "../hooks/withView";
import SectionTitle from "../SectionTitle";

const StyledExperienceSection = styled.section`
  background-color: ${({ theme }) => theme.mainDark};
  margin-bottom: 128px;
  .inner {
    width: 80%;
    margin: 0 auto;
    padding: 64px 0px 128px 0px;
    .jobs-container {
      display: flex;
      gap: 48px;
    }
  }
`;

const StyledJobWrapper = styled.div`
  width: 100%;
  position: relative;
  top: ${({ isEven }) => isEven && "48px"};
  .job-inner {
    border-radius: var(--border-radius);
    border: 1px solid ${({ theme }) => theme.mainTeal};
    min-height: 400px;
    padding: 40px;
    .organization-name {
      color: ${({ theme }) => theme.mainTeal};
      font-weight: 500;
      font-size: 20px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .position {
      color: ${({ theme }) => theme.mainLightText};
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 8px;
    }
    .period {
      color: ${({ theme }) => theme.secondLightText};
      font-size: 18px;
      margin-bottom: 24px;
    }
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
    color: ${({ theme }) => theme.mainLightText};
    box-sizing: border-box;
    margin-bottom: 16px;
    &::before {
      content: ">>";
      width: 8px;
      height: 8px;
      display: inline-block;
      position: relative;
      color: ${({ theme }) => theme.mainTeal};
    }
  }
`;

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

  return (
    <StyledExperienceSection id="experience">
      <div className="inner">
        <SectionTitle
          title="2. Experience"
          subtitle="A list of where I worked"
          light={true}
        />
        <div className="jobs-container">
          {jobs.map((item, index) => (
            <StyledJobWrapper
              key={item.strapiId}
              isEven={(index + 1) % 2 === 0}
            >
              <div className="job-inner">
                <span className="position">{item.position} </span>
                <a
                  className="organization-name"
                  href={item.company_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{item.company}
                </a>
                <div className="period">{item.duration}</div>
                <StyledJobDescription>
                  {item.description.map((desc) => (
                    <li key={desc.id}>{desc.detail}</li>
                  ))}
                </StyledJobDescription>
              </div>
            </StyledJobWrapper>
          ))}
        </div>
      </div>
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
        company_link
      }
    }
  }
`;

export default Experience;
