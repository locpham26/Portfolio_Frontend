import React from "react";
import styled from "styled-components";

const StyledContactSection = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contacts = () => {
  return (
    <StyledContactSection>
      <div className="section-title">Contact Me</div>
    </StyledContactSection>
  );
};

export default Contacts;
