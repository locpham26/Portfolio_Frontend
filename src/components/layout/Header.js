import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 60px;
  padding: 0px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: purple;
`;

const NavigationListContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const LinkWrapper = styled.div`
  margin-right: 24px;
`;

const LinkItem = styled(Link)`
  color: black;
  text-decoration: none;
`;

const LinkStyleItem = styled.div``;

const navigationItems = [
  { key: "home", to: "/#home/", label: "Home" },
  { key: "about", to: "/#about/", label: "About me" },
  { key: "experience", to: "#experience", label: "Experience" },
  { key: "projects", to: "#projects", label: "Projects" },
  { key: "other", to: "#other", label: "Other Works" },
  { key: "contacts", to: "#contacts", label: "Contacts" },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <NavigationListContainer>
        {navigationItems.map((item) => (
          <LinkWrapper key={item.key}>
            {/* <LinkItem to={item.to}>{item.label}</LinkItem> */}
            <Link to={item.to} activeStyle={{ color: "red" }}>
              {item.label}
            </Link>
          </LinkWrapper>
        ))}
      </NavigationListContainer>
    </HeaderWrapper>
  );
};

export default Header;
