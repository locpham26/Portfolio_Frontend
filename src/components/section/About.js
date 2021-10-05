import React from "react";
import styled from "styled-components";
import { DesignIcon, MobileIcon, WebIcon } from "../icons";

const StyledAboutSection = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 192px;
  .intro-text {
    color: var(--secondary-text);
    font-size: 16px;
    text-align: center;
    .school-name {
      color: var(--primary-purple);
    }
  }
`;

const StyledSkillList = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 32px;
  .skill-box-inner {
    width: 100%;
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
  }
`;

const StyledSkillCard = styled.div`
  width: 28%;
  /* margin: 0px auto; */
  height: 100%;
  .skill-card-inner {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    background-color: #fff4ff;
    padding: 24px;
    border-radius: var(--border-radius);
    .icon-wrapper {
      width: 48px;
      height: 48px;
      background-color: white;
      border-radius: 12px;
      ${({ theme }) => theme.mixins.flexCenter};
      box-sizing: border-box;
      margin-bottom: 16px;
    }
    .title {
      font-weight: 500;
      font-size: 24px;
      box-sizing: border-box;
      color: var(--primary-text);
      margin-bottom: 16px;
    }
    .description {
      color: var(--primary-text);
      font-size: 16px;
    }
  }
`;

const educationText =
  "I am currently a senior majoring in Computer Science at ";
const universityName = "Texas Christian University";
const jobText =
  "I am a full-stack developer. Creating web apps and mobile apps is my passion.";
const additionalText = "I can also work on UI and UX design.";

const skillItems = [
  {
    key: "web",
    title: "Web Development",
    description:
      "Deep v succulents biodiesel godard man bun, master cleanse slow-carb affogato yr cronut seitan. Man braid glossier banh mi, deep v salvia lo-fi jianbing forage air plant fam.",
    icon: <WebIcon />,
  },
  {
    key: "mobile",
    title: "Mobile Development",
    description:
      "Deep v succulents biodiesel godard man bun, master cleanse slow-carb affogato yr cronut seitan. Man braid glossier banh mi, deep v salvia lo-fi jianbing forage air plant fam.",
    icon: <MobileIcon />,
  },
  {
    key: "design",
    title: "UI UX Design",
    description:
      "Deep v succulents biodiesel godard man bun, master cleanse slow-carb affogato yr cronut seitan. Man braid glossier banh mi, deep v salvia lo-fi jianbing forage air plant fam.",
    icon: <DesignIcon />,
  },
];

const About = () => {
  return (
    <StyledAboutSection id="about">
      <div className="section-title">About me</div>
      <p className="intro-text">
        {educationText}
        <span className="school-name">{universityName}</span>.
      </p>
      <p className="intro-text">{jobText}</p>
      <p className="intro-text">{additionalText}</p>
      <StyledSkillList>
        <div className="skill-box-inner">
          {skillItems.map((item) => (
            <StyledSkillCard key={item.key}>
              <div className="skill-card-inner">
                <div className="icon-wrapper">{item.icon}</div>
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
              </div>
            </StyledSkillCard>
          ))}
        </div>
      </StyledSkillList>
    </StyledAboutSection>
  );
};

export default About;
