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
    margin-bottom: 16px;
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }

    a {
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const socialItems = [
  { key: "facebook", to: "", icon: <FacebookIcon /> },
  {
    key: "linkedin",
    to: "https://www.linkedin.com/in/locpham26/",
    icon: <LinkedInIcon />,
  },
  { key: "insta", to: "", icon: <InstaIcon /> },
  { key: "github", to: "", icon: <GithubIcon /> },
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
