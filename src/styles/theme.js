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
  mainPurple: "#6510cc",
  secondaryPurple: "#C310CC",
  mainYellow: "#FFBA00",
};

export default theme;
