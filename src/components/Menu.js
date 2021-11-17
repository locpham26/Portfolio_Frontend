import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { CloseIcon } from "./icons";
import { motion, AnimatePresence } from "framer-motion";

const StyledMenu = styled(motion.div)`
  height: 100vh;
  position: fixed;
  z-index: 10;
  width: 320px;
  background-color: #1f263a;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .close-wrapper {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .inner {
    /* height: 100%; */

    position: relative;
    .nav-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .resume-button {
      padding: 8px 16px;
      border: 1px solid ${({ theme }) => theme.mainTeal};
      color: ${({ theme }) => theme.mainTeal};
      background-color: transparent;
      font-size: 16px;
      display: flex;
      text-decoration: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: var(--border-radius);
      box-shadow: inset 0 0 20px rgba(27, 232, 224, 0);
      outline: 1px solid;
      outline-color: rgba(27, 232, 224, 0.5);
      outline-offset: 0px;
      text-shadow: none;
      transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
      &:hover {
        box-shadow: inset 0 0 20px rgba(27, 232, 224, 0.5),
          0 0 20px rgba(27, 232, 224, 0.2);
        outline-color: rgba(27, 232, 224, 0);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388;
      }
    }
  }
`;

const StyledLinkWrapper = styled.li`
  cursor: pointer;
  position: relative;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.mainLightText};
    font-weight: 500;
  }
  &.active {
    a {
      color: var(--primary-purple);
    }
  }
  &:hover {
    a {
      color: ${({ theme }) => theme.mainTeal};
      transition: color 0.4s;
    }
  }
`;

const navItems = [
  { key: "about", to: "/#about", label: "About Me" },
  { key: "experience", to: "/#experience", label: "Experience" },
  { key: "projects", to: "/#projects", label: "Projects" },
  { key: "other", to: "/#other", label: "Other Works" },
  { key: "contacts", to: "/#contacts", label: "Contacts" },
];

const Menu = ({ location, closeMenu }) => {
  return (
    <AnimatePresence>
      <StyledMenu
        initial={{ x: 320 }}
        animate={{ x: 0, transition: { duration: 0.4 } }}
        exit={{ x: 320, transition: { duration: 0.4 } }}
      >
        <button className="close-wrapper" onClick={closeMenu}>
          <CloseIcon />
        </button>
        <div className="inner">
          <ul className="nav-list">
            {navItems.map((item) => (
              <StyledLinkWrapper
                key={item.key}
                className={location.hash === item.to ? "active" : ""}
              >
                <AnchorLink
                  to={item.to}
                  stripHash
                  onAnchorLinkClick={closeMenu}
                >
                  {item.label}
                </AnchorLink>
              </StyledLinkWrapper>
            ))}
          </ul>
          <a
            className="resume-button"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </StyledMenu>
    </AnimatePresence>
  );
};

export default Menu;
