import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledResumeButton = styled(motion.div)`
  ${({ theme }) => theme.mixins.ctaButton}
`;

const ResumeButton = () => {
  return <StyledResumeButton>Resume</StyledResumeButton>;
};

export default ResumeButton;
