import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const StyledFooter = styled.footer`
  height: var(--nav-height);
  background-color: #fafafa;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #dddeee;
  .footer-text {
    color: var(--secondary-text);
    font-size: 14px;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.mainTeal};
    }
  }
`;

const Footer = () => {
  const {
    allStrapiRepo: { nodes: repo },
  } = useStaticQuery(query);
  const repoLink = repo[0].link;
  return (
    <StyledFooter>
      <a
        className="footer-text"
        href={repoLink}
        target="_blank"
        rel="noreferrer"
      >
        Designed and built by Loc Pham
      </a>
    </StyledFooter>
  );
};

export const query = graphql`
  {
    allStrapiRepo {
      nodes {
        link
      }
    }
  }
`;

export default Footer;
