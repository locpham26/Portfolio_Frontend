import { css } from "styled-components";

import NotoSansDisplayRegularWoff from "../fonts/NotoSansDisplay/noto-sans-display-regular.woff";
import NotoSansDisplayRegularWoff2 from "../fonts/NotoSansDisplay/noto-sans-display-regular.woff2";
import NotoSansDisplayRegularTtf from "../fonts/NotoSansDisplay/noto-sans-display-regular.ttf";

import NotoSansDisplayMediumWoff from "../fonts/NotoSansDisplay/noto-sans-display-medium.woff";
import NotoSansDisplayMediumWoff2 from "../fonts/NotoSansDisplay/noto-sans-display-medium.woff2";
import NotoSansDisplayMediumTtf from "../fonts/NotoSansDisplay/noto-sans-display-medium.ttf";

import NotoSansDisplaySemiBoldWoff from "../fonts/NotoSansDisplay/noto-sans-display-semibold.woff";
import NotoSansDisplaySemiBoldWoff2 from "../fonts/NotoSansDisplay/noto-sans-display-semibold.woff2";
import NotoSansDisplaySemiBoldTtf from "../fonts/NotoSansDisplay/noto-sans-display-semibold.ttf";

import NotoSansDisplayBoldWoff from "../fonts/NotoSansDisplay/noto-sans-display-bold.woff";
import NotoSansDisplayBoldWoff2 from "../fonts/NotoSansDisplay/noto-sans-display-bold.woff2";
import NotoSansDisplayBoldTtf from "../fonts/NotoSansDisplay/noto-sans-display-bold.ttf";

const notoSansDisplay = {
  family: "Noto Sans Display",
  weights: {
    400: [
      NotoSansDisplayRegularTtf,
      NotoSansDisplayRegularWoff,
      NotoSansDisplayRegularWoff2,
    ],
    500: [
      NotoSansDisplayMediumTtf,
      NotoSansDisplayMediumWoff,
      NotoSansDisplayMediumWoff2,
    ],
    600: [
      NotoSansDisplaySemiBoldTtf,
      NotoSansDisplaySemiBoldWoff,
      NotoSansDisplaySemiBoldWoff2,
    ],
    700: [
      NotoSansDisplayBoldTtf,
      NotoSansDisplayBoldWoff,
      NotoSansDisplayBoldWoff2,
    ],
  },
};

const createFontFace = (font) => {
  let styles = "";
  Object.entries(font.weights).forEach(([weight, format]) => {
    const ttf = format[0];
    const woff = format[1];
    const woff2 = format[2];
    console.log(ttf);
    styles += `
      @font-face {
        font-family: '${font.family}';
        src: url(${ttf}) format('truetype'),
            url(${woff}) format('woff'),
            url(${woff2}) format('woff2');
        font-weight: ${weight};
        font-style: normal;
        font-display: auto;
      }
    `;
  });
  console.log(styles);
  return styles;
};

const notoSansDisplayFont = createFontFace(notoSansDisplay);
const fonts = css`
  ${notoSansDisplayFont}
`;

console.log(fonts);
export default fonts;
