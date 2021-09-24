import React from "react";
import styled from "styled-components";
import { DesignIcon, MobileIcon, WebIcon } from "../icons";

const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .intro-text {
    color: var(--secondary-text);
    font-size: 16px;
    text-align: center;
    .school-name {
      color: var(--primary-purple);
    }
  }
`;

const StyledSkillBoxContainer = styled.div`
  position: relative;
  border-radius: var(--border-radius);
  width: 100%;
  box-sizing: border-box;
  margin-top: 64px;
  .skill-box-wrapper {
    width: 100%;
    position: relative;
    border: 1px solid var(--primary-text);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 32px 0px;
    z-index: 1;
    border-radius: var(--border-radius);
    background-color: white;
  }
  .decoration {
    width: 28%;
    height: 64px;
    border-radius: var(--border-radius);
    background-color: var(--primary-purple);
    position: absolute;
  }
  .top {
    left: 73%;
    bottom: 75%;
  }
  .bottom {
    right: 73%;
    top: 75%;
  }
`;

const StyledSkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-wrapper {
    width: 48px;
    height: 48px;
    background-color: var(--primary-purple);
    border-radius: 12px;
    ${({ theme }) => theme.mixins.flexCenter};
    box-sizing: border-box;
    margin-bottom: 24px;
  }
  .title {
    font-weight: 600;
    box-sizing: border-box;
    margin-bottom: 16px;
  }
  .description {
    color: var(--secondary-text);
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
    description: "fsdj lahf kljlf jlkf klsjdf kl",
    icon: <WebIcon />,
  },
  {
    key: "mobile",
    title: "Mobile Development",
    description: "fsd fsdgg gdfg d gdfg",
    icon: <MobileIcon />,
  },
  {
    key: "design",
    title: "UI UX Design",
    description: "fsdf sdf  sfd ff sfd ",
    icon: <DesignIcon />,
  },
];

const About = () => {
  return (
    <StyledAboutSection id="about">
      <div className="section-title">About</div>
      <p className="intro-text">
        {educationText}
        <span className="school-name">{universityName}</span>.
      </p>
      <p className="intro-text">{jobText}</p>
      <p className="intro-text">{additionalText}</p>
      <StyledSkillBoxContainer>
        <div className="skill-box-wrapper">
          {skillItems.map((item) => (
            <StyledSkillCard key={item.key}>
              <div className="icon-wrapper">{item.icon}</div>
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
            </StyledSkillCard>
          ))}
        </div>
        <div className="top decoration"></div>
        <div className="bottom decoration"></div>
      </StyledSkillBoxContainer>
    </StyledAboutSection>
  );
};

export default About;
