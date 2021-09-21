import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import ResumeButton from "./ResumeButton";

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  height: var(--nav-height);
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  padding: 0px 15%;
`;

const StyledNavList = styled(motion.nav)`
  display: flex;
  height: 100%;
`;

const StyledLinkWrapper = styled(motion.div)`
  margin-right: 24px;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  a {
    text-decoration: none;
    color: var(--primary-text);
  }
  .decoration-item {
    width: 0px;
  }
  &.active {
    a {
      color: var(--primary-teal);
    }
    .decoration-item {
      width: 100%;
      animation-name: slide-in;
      animation-duration: 0.4s;
      @keyframes slide-in {
        0% {
          width: 0%;
        }
        70% {
          width: 100%;
        }
        85% {
          width: 110%;
        }
        100% {
          width: 100%;
        }
      }
    }
  }
  &:hover {
    a {
      color: var(--primary-teal);
      transition: color 0.4s;
    }
  }
`;

const StyledLinkDecoration = styled(motion.div)`
  height: 2px;
  background-color: var(--primary-teal);
  position: absolute;
  bottom: 12px;
`;

const childrenVariants = {
  show: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: -40,
    opacity: 0,
  },
};

const parentVariant = {
  show: {
    transition: { staggerChildren: 0.1 },
  },
  hidden: {
    transition: { staggerChildren: 0.05 },
  },
};

const navItems = [
  { key: "about", to: "#about", label: "About Me" },
  { key: "experience", to: "#experience", label: "Experience" },
  { key: "projects", to: "#projects", label: "Projects" },
  { key: "other", to: "#other", label: "Other Works" },
  { key: "contacts", to: "#contacts", label: "Contacts" },
];

const Nav = ({ location }) => {
  return (
    <StyledHeader>
      <StyledNavList initial="hidden" animate="show" variants={parentVariant}>
        {navItems.map((item) => (
          <StyledLinkWrapper
            key={item.key}
            className={location.hash === item.to ? "active" : ""}
            variants={childrenVariants}
          >
            <Link to={item.to}>{item.label}</Link>
            <StyledLinkDecoration className="decoration-item" />
          </StyledLinkWrapper>
        ))}
      </StyledNavList>
      <ResumeButton variants={childrenVariants} />
    </StyledHeader>
  );
};

export default Nav;
