import React from "react";
import styled from "styled-components";
import WithView from "./hooks/withView";

const StyledTitle = styled.h3`
  color: var(--primary-text);
  text-align: center;
  font-size: 32px;
  margin-bottom: 32px;
  font-weight: 500;
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

const SectionTitle = ({ title }) => {
  return (
    <WithView initial="hidden" animation="show" variants={titleVariants}>
      <StyledTitle>{title}</StyledTitle>
    </WithView>
  );
};

export default SectionTitle;
