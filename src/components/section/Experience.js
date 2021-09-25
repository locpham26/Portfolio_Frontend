import React from "react";
import styled from "styled-components";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import HeroImage from "../../images/hero.jpeg";

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
  display: grid;
  grid-template-columns: ${({ isOdd }) => (isOdd ? "480px 1fr" : "1fr 480px")};
  direction: ${({ isOdd }) => (isOdd ? "ltr" : "rtl")};
  gap: 96px;
  justify-content: space-between;
`;

const StyledJobImageContainer = styled.div`
  position: relative;
  border-radius: var(--border-radius);
  .job-image {
    width: 100%;
    z-index: 1;
    border-radius: var(--border-radius);
  }
  .decoration {
    position: absolute;

    border-radius: var(--border-radius);
    background-color: var(--primary-teal);
    width: 20%;
    height: 20%;
  }
  .top {
    left: 84%;
    bottom: 84%;
    background-color: var(--primary-teal);
  }
  .bottom {
    right: 84%;
    top: 84%;
    background-color: var(--primary-purple);
  }
`;

const StyledJobDescriptionWrapper = styled.div`
  /* background-color: #fafdfd; */
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
    margin-bottom: 8px;
  }
  .period {
    color: var(--secondary-text);
    font-size: 20px;
    margin-bottom: 24px;
  }
  .description {
    color: var(--primary-text);
    font-size: 20px;
    .bullet {
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
    font-size: 18px;
    color: var(--primary-text);
    box-sizing: border-box;
    margin-bottom: 16px;
    .bullet {
      width: 16px;
      height: 16px;
      display: inline-block;
      border-radius: 4px;
      background-color: var(--primary-teal);
      transform: rotate(45deg);
      position: relative;
      top: 4px;
      left: 4px;
    }
  }
`;

const jobItems = [
  {
    key: 1,
    name: "MISA JSC",
    position: "Software Engineer Intern",
    period: "December 2020 - May 2021",
    logo: HeroImage,
    description: [
      {
        key: 1,
        text: "I’m baby crucifix umami drinking vinegar wayfarers knausgaardorganic jianbing copper mug. I’m baby crucifix umami drinking vinegar wayfarers knausgaard organic jianbing copper mug.",
      },
      {
        key: 2,
        text: "I’m baby crucifix umami drinking vinegar wayfarers knausgaardorganic jianbing copper mug. I’m baby crucifix umami drinking vinegar wayfarers knausgaard organic jianbing copper mug.",
      },
      {
        key: 3,
        text: "I’m baby crucifix umami drinking vinegar wayfarers knausgaardorganic jianbing copper mug. I’m baby crucifix umami drinking vinegar wayfarers knausgaard organic jianbing copper mug.",
      },
    ],
  },
  {
    key: 2,
    name: "Eastgate Software JSC",
    position: "Web Developer Intern",
    period: "March 2021 - July 2021",
    logo: HeroImage,
    description: [
      {
        key: 1,
        text: "I’m baby crucifix umami drinking vinegar wayfarers knausgaardorganic jianbing copper mug. I’m baby crucifix umami drinking vinegar wayfarers knausgaard organic jianbing copper mug.",
      },
      {
        key: 2,
        text: "I’m baby crucifix umami drinking vinegar wayfarers knausgaardorganic jianbing copper mug. I’m baby crucifix umami drinking vinegar wayfarers knausgaard organic jianbing copper mug.",
      },
      {
        key: 3,
        text: "I’m baby crucifix umami drinking vinegar wayfarers knausgaardorganic jianbing copper mug. I’m baby crucifix umami drinking vinegar wayfarers knausgaard organic jianbing copper mug.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <StyledExperienceSection id="experience">
      <div className="section-title">Experience</div>
      <StyledJobList>
        {jobItems.map((item, index) => (
          <StyledJobItem key={item.key} isOdd={(index + 1) % 2 !== 0}>
            <StyledJobImageContainer>
              <GatsbyImage
                className="job-image"
                alt="job-image"
                image={item.logo}
              />
              <div className="top decoration"></div>
              <div className="bottom decoration"></div>
            </StyledJobImageContainer>
            <StyledJobDescriptionWrapper>
              <p className="position">
                {item.position}
                <span className="organization-name">@{item.name}</span>
              </p>
              <p className="period">{item.period}</p>
              <StyledJobDescription>
                {item.description.map((desc) => (
                  <li key={desc.key}>
                    <span className="bullet" />
                    {desc.text}
                  </li>
                ))}
              </StyledJobDescription>
            </StyledJobDescriptionWrapper>
          </StyledJobItem>
        ))}
      </StyledJobList>
    </StyledExperienceSection>
  );
};

export default Experience;
