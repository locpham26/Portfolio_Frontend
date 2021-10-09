import React from "react";
import styled from "styled-components";
import { FacebookIcon, GithubIcon, InstaIcon, LinkedInIcon } from "./icons";

const StyledSideBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 40px;
  z-index: 10;
  right: auto;
  width: 40px;
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 80px;
    margin: 0 auto;
    background-color: #ffba00;
  }
  li {
    margin-bottom: 8px;
    border-radius: 8px;

    a {
      padding: 8px;
      display: flex;
      svg {
        width: 20px;
        height: 20px;
      }
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
    }
  }
`;

const socialItems = [
  {
    key: "facebook",
    to: "https://www.facebook.com/phamthe.loc.12/",
    icon: <FacebookIcon />,
  },
  {
    key: "linkedin",
    to: "https://www.linkedin.com/in/locpham26/",
    icon: <LinkedInIcon />,
  },
  {
    key: "insta",
    to: "https://www.instagram.com/phamtheloc/",
    icon: <InstaIcon />,
  },
  { key: "github", to: "https://github.com/locpham26", icon: <GithubIcon /> },
];

const Side = () => {
  return (
    <StyledSideBar>
      <StyledSocialList>
        {socialItems.map((item) => (
          <li key={item.key}>
            <a href={item.to} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </StyledSocialList>
    </StyledSideBar>
  );
};

export default Side;
