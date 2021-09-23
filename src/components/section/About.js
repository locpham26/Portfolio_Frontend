import React from "react";
import styled from "styled-components";

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
  .skill-box-wrapper {
    width: 100%;
    position: relative;
    border: 1px solid var(--primary-text);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200px;
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
    left: 66%;
    bottom: 81%;
  }
  .bottom {
    right: 66%;
    top: 81%;
  }
`;

const educationText = "I am currently a senior majoring in Computer Science at";
const universityName = "Texas Christian University";
const jobText =
  "I am a full-stack developer. Creating web apps and mobile apps is my passion.";
const additionalText = "I can also work on UI and UX design.";

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
        <div className="skill-box-wrapper"></div>
        <div className="top decoration"></div>
        <div className="bottom decoration"></div>
      </StyledSkillBoxContainer>
    </StyledAboutSection>
  );
};

export default About;
