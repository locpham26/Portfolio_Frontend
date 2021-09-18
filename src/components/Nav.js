import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  height: var(--nav-height);
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  padding: 0px 10%;
`;

const StyledNavList = styled.nav`
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
    color: black;
  }
  .decoration-item {
    width: 0px;
  }
  ~ .active {
    a {
      color: var(--primary-teal);
    }
    .decoration-item {
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
          width: 1005;
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
  width: 100%;
  height: 2px;
  background-color: var(--primary-teal);
  position: absolute;
  bottom: 12px;
`;

const navItems = [
  { key: "home", to: "#home", label: "Home" },
  { key: "about", to: "#about", label: "About Me" },
  { key: "experience", to: "#experience", label: "Experience" },
  { key: "projects", to: "#projects", label: "Projects" },
  { key: "other", to: "#other", label: "Other Works" },
  { key: "contacts", to: "#contacts", label: "Contacts" },
];

const decorationMotion = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const Nav = ({ location }) => {
  return (
    <StyledHeader>
      <StyledNavList>
        {navItems.map((item) => (
          <StyledLinkWrapper
            key={item.key}
            className={location.hash == item.to ? "active" : ""}
          >
            <Link to={item.to}>{item.label}</Link>
            <StyledLinkDecoration className="decoration-item" />
          </StyledLinkWrapper>
        ))}
      </StyledNavList>
    </StyledHeader>
  );
};

export default Nav;
