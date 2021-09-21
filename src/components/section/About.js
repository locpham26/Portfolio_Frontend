import React from "react";
import styled from "styled-components";

const StyledAboutSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;

const StyledIntroText = styled.div`
  color: var(--secondary-text);
  font-size: 16px;
  .school-name {
    color: var(--primary-purple);
  }
`;

const introText = "I am a student at TCU. \n I do web and mobile design.";

const About = () => {
  return (
    <StyledAboutSection id="about">
      <div className="section-title">About</div>
      <StyledIntroText>{introText}</StyledIntroText>
    </StyledAboutSection>
  );
};

export default About;
