import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { paperPlaneAnimation } from "../animation";

const StyledContactSection = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 96px;
`;

const StyledContactContainer = styled.div`
  border-radius: var(--border-radius);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 40px;
  background-color: #f6f4ff;
  .animation-wrapper {
    flex: 0 0 400px;
  }
`;

const StyledContactForm = styled.form`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  .input-label {
    color: var(--primary-text);
    font-weight: 400;
    font-size: 16px;
    font-family: var(--font-sans);
    margin-bottom: 8px;
  }
  .input-field {
    height: 48px;
    outline: none;
    border-radius: var(--border-radius);
    margin-bottom: 16px;
    padding: 8px 16px;
    border: 1px solid #dddeee;
  }
  .input-area {
    resize: none;
    font-family: var(--font-sans);
    height: 100% !important;
  }
  .submit-button {
    padding: 12px 24px;
    border-radius: var(--border-radius);
    background-color: ${({ theme }) => theme.mainPurple};
    color: white;
    font-size: 20px;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

const planeAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: paperPlaneAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://getform.io/f/9196db3a-a677-4316-b3c5-97053175e6d2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );
      if (response) console.log(response.status);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <StyledContactSection>
      <div className="section-title">Contact Me</div>
      <StyledContactContainer>
        <Lottie options={planeAnimationOptions} width={400} height="auto" />
        <StyledContactForm onSubmit={onSubmit}>
          <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1 1 50%",
              }}
            >
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <input
                className="input-field"
                id="email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="input-label" htmlFor="name">
                Name
              </label>
              <input
                className="input-field"
                id="name"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1 1 50%",
              }}
            >
              <label className="input-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="input-field input-area"
                id="message"
                type="text"
                name="message"
                rows="4"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </StyledContactForm>
      </StyledContactContainer>
    </StyledContactSection>
  );
};

export default Contacts;
