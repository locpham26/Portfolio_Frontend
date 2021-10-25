import mixins from "./mixins";

const theme = {
  bp: {
    mobileS: `min-width: 320px`,
    mobileM: `min-width: 375px`,
    mobileL: `min-width: 425px`,
    tabletS: `min-width: 600px`,
    tabletL: `min-width: 768px`,
    laptopS: `min-width: 1024px`,
    laptopM: `min-width: 1366px`,
    laptopL: `min-width: 1440px`,
    desktopM: `min-width: 1680px`,
    desktopL: `min-width: 1920px`,
  },
  mixins,
  mainPurple: "#1D48F5",
  secondaryPurple: "#C310CC",
  mainYellow: "#FFBA00",
  mainBlue: "#4DDFFD",
  mainPink: "#F2B8EB",
  mainTeal: "#1BE8E0",
  mainDark: "#081927",
  mainLightText: "#F6F4FF",
  secondLightText: "#C7D0D9",
};

export default theme;
