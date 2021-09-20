import React from "react";
import styled from "styled-components";

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  min-height: 100vh;
  justify-content: flex-start;
`;

const StyledHeroImage = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid var(--primary-teal);
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <StyledHeroImage></StyledHeroImage>
    </StyledHeroSection>
  );
};

export default Hero;
