import React from "react";
import styled from "styled-components";
import WithView from "./hooks/withView";

const StyledSectionTitle = styled.div`
  margin-bottom: 32px;
  font-family: var(--font-sans-serif);
  .title {
    color: ${({ theme, light }) =>
      light ? theme.mainTeal : theme.mainDarkText};
    font-size: 24px;
    font-weight: 600;
    margin: 8px 0px;
    letter-spacing: 0.08rem;
    /* font-family: var(--font-sans); */
  }
  .subtitle {
    color: ${({ theme, light }) =>
      light ? theme.mainTeal : theme.mainDarkText};
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
    display: flex;
    align-items: center;
    font-family: var(--font-sans);
    &:after {
      content: "";
      width: 32px;
      display: block;
      height: 1px;
      border-top: 1px solid
        ${({ theme, light }) => (light ? theme.mainTeal : theme.mainDarkText)};
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

const SectionTitle = ({ title, subtitle, light }) => {
  return (
    <WithView initial="hidden" animation="show" variants={titleVariants}>
      <StyledSectionTitle light={light}>
        <h3 className="title">{title}</h3>
        <h6 className="subtitle">{subtitle}</h6>
      </StyledSectionTitle>
    </WithView>
  );
};

export default SectionTitle;
