import React from "react";
import styled from "styled-components";

const StyledContactSection = styled.section`
  width: 80%;

  margin: 0 auto;
  .inner {
    background-color: black;
    height: 100px;
    border-radius: var(--border-radius);
  }
`;

const Contacts = () => {
  return (
    <StyledContactSection>
      <div className="inner"></div>
    </StyledContactSection>
  );
};

export default Contacts;
