import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const StyledExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledJobList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
`;

const StyledJobItem = styled.li`
  margin-bottom: 96px;
  display: flex;
  gap: 96px;
  justify-content: space-between;
  flex-direction: ${({ isOdd }) => (isOdd ? "row" : "row-reverse")};
  align-items: center;
`;

const StyledJobImageContainer = styled.div`
  position: relative;
  flex-basis: 480px;
  border-radius: var(--border-radius);
  .job-image {
    width: 100%;
    z-index: 1;
    border-radius: var(--border-radius);
  }
`;

const StyledJobDescriptionWrapper = styled.div`
  flex-grow: 1;
  background-color: #fafdfd;
  border-radius: var(--border-radius);
  padding: 40px;
  height: 100%;
  .organization-name {
    color: var(--primary-teal);
  }
  .position {
    color: var(--primary-text);
    font-weight: 600;
    font-size: 24px;
  }
  .period {
    color: var(--secondary-text);
    font-size: 20px;
  }
  .description {
    color: var(--primary-text);
    font-size: 20px;
  }
`;

const Experience = () => {
  return (
    <StyledExperienceSection id="experience">
      <div className="section-title">Experience</div>
      <StyledJobList>
        <StyledJobItem isOdd={true}>
          <StyledJobImageContainer>
            <StaticImage
              className="job-image"
              alt="job-image"
              src="../../images/hero.jpeg"
            />
          </StyledJobImageContainer>
          <StyledJobDescriptionWrapper>
            <p className="position">
              Software Engineer Intern{" "}
              <span className="organization-name">@MISA JSC</span>
            </p>
            <p className="period">December 2020 - May 2021</p>
            <p></p>
          </StyledJobDescriptionWrapper>
        </StyledJobItem>
      </StyledJobList>
    </StyledExperienceSection>
  );
};

export default Experience;
