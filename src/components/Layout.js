import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";
import Nav from "./Nav";

const StyledContent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ location, children }) => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContent>
          <Nav location={location} />
          <div id="content">{children}</div>
        </StyledContent>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
