import React from "react";
import styled from "styled-components";
import {
  FacebookIcon,
  GithubIcon,
  InstaIcon,
  LinkedInIcon,
  MailIcon,
} from "./icons";
import { graphql, useStaticQuery } from "gatsby";

const StyledSideBar = styled.div`
  position: fixed;
  bottom: 64px;
  right: 40px;
  z-index: 10;
  left: auto;
  width: 40px;
  @media only screen and (${({ theme }) => theme.bp.laptopS}) {
    right: 20px;
  }
  @media only screen and (${({ theme }) => theme.bp.tabletL}) {
    right: 8px;
  }
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
        fill: ${({ theme }) => theme.mainTeal};
      }
    }
    &:hover {
      background-color: ${({ theme }) => theme.mainTeal};
      a {
        svg {
          fill: #ffffff;
        }
      }
    }
  }
`;

const email = "locpham2602@gmail.com";

const Side = () => {
  const {
    allStrapiSocialMedia: { nodes: socialLinks },
  } = useStaticQuery(query);
  const { facebook, linkedin, instagram, github } = socialLinks[0];

  const socialItems = [
    {
      key: "facebook",
      to: facebook,
      icon: <FacebookIcon />,
    },
    {
      key: "linkedin",
      to: linkedin,
      icon: <LinkedInIcon />,
    },
    { key: "github", to: github, icon: <GithubIcon /> },
    {
      key: "insta",
      to: instagram,
      icon: <InstaIcon />,
    },
  ];
  return (
    <StyledSideBar>
      <StyledSocialList>
        <li>
          <a href={`mailto:${email}`}>
            <MailIcon />
          </a>
        </li>
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

export const query = graphql`
  {
    allStrapiSocialMedia {
      nodes {
        instagram
        linkedin
        github
        facebook
      }
    }
  }
`;

export default Side;
