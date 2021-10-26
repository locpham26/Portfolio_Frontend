import React from "react";
import styled from "styled-components";
import WithView from "./hooks/withView";

const StyledSectionTitle = styled.div`
  margin-bottom: 32px;
  font-family: var(--font-sans-serif);
  .title {
    color: ${({ theme }) => theme.mainTeal};
    font-size: 24px;
    font-weight: 600;
    margin: 8px 0px;
    letter-spacing: 0.08rem;
  }
  .subtitle {
    color: ${({ theme }) => theme.mainTeal};
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
    display: flex;
    align-items: center;
    &:after {
      content: "";
      width: 32px;
      display: block;
      height: 2px;
      border-top: 2px solid ${({ theme }) => theme.mainTeal};
      margin-left: 8px;
    }
  }
`;

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const SectionTitle = ({ title, subtitle }) => {
  return (
    <WithView initial="hidden" animation="show" variants={titleVariants}>
      <StyledSectionTitle>
        <h3 className="title">{title}</h3>
        <h6 className="subtitle">{subtitle}</h6>
      </StyledSectionTitle>
    </WithView>
  );
};

export default SectionTitle;
