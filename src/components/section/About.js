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

const About = () => {
  return (
    <StyledAboutSection>
      <div className="section-title">About</div>
      <StyledIntroText>I am a student at TCU</StyledIntroText>
    </StyledAboutSection>
  );
};

export default About;
