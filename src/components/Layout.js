import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";
import Nav from "./Nav";
import Side from "./Side";
import Head from "./Head";
import Footer from "./Footer";
import Menu from "./Menu";

const StyledContent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  padding: 0px;
`;

const Layout = ({ location, children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);
  return (
    <div id="root">
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContent>
          <Nav location={location} openMenu={openMenu} />
          <Side />
          {showMenu && <Menu location={location} closeMenu={closeMenu} />}
          <StyledMain>{children}</StyledMain>
          <Footer />
        </StyledContent>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
