import React from "react";
import styled from "styled-components";
import { FacebookIcon, GithubIcon, InstaIcon, LinkedInIcon } from "./icons";

const StyledSideBar = styled.div`
  position: fixed;
  bottom: 64px;
  right: 40px;
  z-index: 10;
  left: auto;
  width: 40px;
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    margin-bottom: 8px;
    border-radius: 50%;
    a {
      padding: 8px;
      display: flex;
      svg {
        width: 16px;
        height: 16px;
        fill: var(--secondary-text);
      }
    }
    &:hover {
      background-color: ${({ theme }) => theme.mainPink};
      a {
        svg {
          fill: #ffffff;
        }
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
