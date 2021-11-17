import React from "react";
import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Logo } from "./icons";
import { MenuIcon } from "./icons";

const StyledHeader = styled(motion.header)`
  ${({ theme }) => theme.mixins.flexBetween};
  background-color: ${({ theme }) => theme.mainDark};
  height: var(--nav-height);
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  padding: 0px 40px;
  .logo-wrapper {
    width: 32px;
    height: 32px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .resume-button {
    @media only screen and (${({ theme }) => theme.bp.tabletL}) {
      display: none;
    }
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
  .menu-icon {
    display: none;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    @media only screen and (${({ theme }) => theme.bp.tabletL}) {
      display: block;
    }
  }
`;

const StyledNavList = styled(motion.nav)`
  display: flex;
  height: 100%;
  @media only screen and (${({ theme }) => theme.bp.tabletL}) {
    display: none;
  }
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
    color: ${({ theme }) => theme.mainLightText};
    font-weight: 500;
  }
  .decoration-item {
    width: 0px;
  }
  &.active {
    a {
      color: var(--primary-purple);
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
      color: ${({ theme }) => theme.mainTeal};
      transition: color 0.4s;
    }
  }
`;

const StyledLinkDecoration = styled(motion.div)`
  height: 2px;
  background-color: ${({ theme }) => theme.mainTeal};
  position: absolute;
  bottom: 24px;
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
  { key: "about", to: "/#about", label: "About Me" },
  { key: "experience", to: "/#experience", label: "Experience" },
  { key: "projects", to: "/#projects", label: "Projects" },
  { key: "other", to: "/#other", label: "Other Works" },
  { key: "contacts", to: "/#contacts", label: "Contacts" },
];

const Nav = ({ location, openMenu }) => {
  const [hidden, setHidden] = React.useState(false);
  const [overHero, setOverHero] = React.useState(false);
  const { scrollY } = useViewportScroll();
  const scrollListener = () => {
    if (scrollY.current < scrollY.prev) setHidden(false);
    else if (scrollY.current > 200) {
      setOverHero(true);
      if (scrollY.current > scrollY.prev) setHidden(true);
    }
    if (scrollY.current <= 200) setOverHero(false);
  };
  React.useEffect(() => {
    scrollY.onChange(() => scrollListener());
  });
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };
  return (
    <StyledHeader
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.5 }}
      style={{
        boxShadow:
          overHero &&
          "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
      }}
    >
      <AnchorLink to="/#hero">
        <div className="logo-wrapper">
          <Logo />
        </div>
      </AnchorLink>
      <StyledNavList initial="hidden" animate="show" variants={parentVariant}>
        {navItems.map((item) => (
          <StyledLinkWrapper
            key={item.key}
            className={location.hash === item.to ? "active" : ""}
            variants={childrenVariants}
          >
            <AnchorLink to={item.to} stripHash>
              {item.label}
            </AnchorLink>
            <StyledLinkDecoration className="decoration-item" />
          </StyledLinkWrapper>
        ))}
      </StyledNavList>
      <a
        className="resume-button"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <button className="menu-icon" onClick={openMenu}>
        <MenuIcon />
      </button>
    </StyledHeader>
  );
};

export default Nav;
