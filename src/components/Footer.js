import React from "react";
import styled from "styled-components";

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
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p className="footer-text">Designed and built by Loc Pham</p>
    </StyledFooter>
  );
};

export default Footer;
