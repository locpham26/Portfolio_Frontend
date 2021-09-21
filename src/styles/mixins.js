import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  ctaButton: css`
    color: white;
    background-color: var(--primary-teal);
    border-radius: var(--border-radius);
    cursor: pointer;
    padding: 8px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default mixins;
