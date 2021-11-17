import mixins from "./mixins";

const theme = {
  bp: {
    mobileS: `max-width: 320px`,
    mobileM: `max-width: 375px`,
    mobileL: `max-width: 425px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    laptopS: `max-width: 1024px`,
    laptopM: `max-width: 1366px`,
    laptopL: `max-width: 1440px`,
    desktopM: `max-width: 1680px`,
    desktopL: `max-width: 1920px`,
  },
  mixins,
  mainPurple: "#1D48F5",
  secondaryPurple: "#C310CC",
  mainYellow: "#FFBA00",
  mainBlue: "#4DDFFD",
  mainPink: "#F2B8EB",
  mainTeal: "#1BE8E0",
  mainDark: "#081927",
  mainNavy: "#152238",
  mainLightText: "#F6F4FF",
  secondLightText: "#C7D0D9",
  mainDarkText: "#1c1a1a",
  secondaryDarkText: "#60626e",
  error: "#ff9494",
  success: "#1BE8E0",
};

export default theme;
