import React, { useContext, useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import Lottie from "react-lottie-player";
import { paperPlaneAnimation } from "../animation";
import SectionTitle from "../SectionTitle";
import WithView from "../hooks/withView";

const StyledContactSection = styled.section`
  background-color: ${({ theme }) => theme.mainDark};
  /* margin-bottom: 128px; */
  .inner {
    width: 80%;
    margin: 0 auto;
    padding: 64px 0px;
    max-width: 1600px;
  }
`;

const StyledContactContainer = styled.div`
  border-radius: var(--border-radius);
  border: 1px solid ${({ theme }) => theme.mainTeal};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 40px;
  background-color: ${({ theme }) => theme.mainDark};
  @media only screen and (${({ theme }) => theme.bp.laptopS}) {
    flex-direction: column;
  }
  .lottie {
    width: 400px;
  }
`;

const StyledContactForm = styled.form`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  @media only screen and (${({ theme }) => theme.bp.laptopS}) {
    width: 100%;
  }
  .input-label {
    color: ${({ theme }) => theme.mainLightText};
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
    background-color: white;
    border: 1px solid #dddeee;
    &:focus {
      border-color: ${({ theme }) => theme.mainTeal};
    }
  }
  .input-area {
    resize: none;
    font-family: var(--font-sans) !important;
    height: 100% !important;
  }
  .submit-button {
    padding: 12px 24px;
    border-radius: var(--border-radius);
    background-color: transparent;
    color: ${({ theme }) => theme.mainTeal};
    font-size: 20px;
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.mainTeal};
    cursor: pointer;
    box-shadow: inset 0 0 20px rgba(27, 232, 224, 0);
    outline: 1px solid;
    outline-color: rgba(27, 232, 224, 0.5);
    outline-offset: 0px;
    text-shadow: none;
    margin-bottom: 16px;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    &:hover {
      box-shadow: inset 0 0 20px rgba(27, 232, 224, 0.5),
        0 0 20px rgba(27, 232, 224, 0.2);
      outline-color: rgba(27, 232, 224, 0);
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #427388;
    }
  }
`;

const StyledSubmitMessage = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ color }) => color};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [status, setStatus] = useState("success");
  const themeContext = useContext(ThemeContext);
  const feedBackContent = {
    error: {
      message: "Please fill in the form.",
      color: themeContext.error,
    },
    success: {
      message: "Message successfully sent. Thank you!",
      color: themeContext.success,
    },
  };
  useEffect(() => {
    if (showFeedback) setTimeout(() => setShowFeedback(false), 4000);
  }, [showFeedback]);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || name.trim() === "" || message.trim === "") {
      setShowFeedback(true);
      setStatus("error");
      return;
    }
    try {
      setIsSubmitting(true);
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
      setIsSubmitting(false);
      setShowFeedback(true);
      if (response && response.status === 200) console.log(response.status);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <StyledContactSection id="contacts">
      <div className="inner">
        <SectionTitle
          title="5. Contact Me"
          subtitle="If you find my profile interesting, please leave me a message."
          light
        />
        <WithView
          initial="hidden"
          animation="show"
          variants={variants}
          fullWidth
        >
          <StyledContactContainer>
            <Lottie
              className="lottie"
              play
              loop
              animationData={paperPlaneAnimation}
            />
            <StyledContactForm onSubmit={onSubmit}>
              <div
                style={{ display: "flex", gap: "16px", marginBottom: "32px" }}
              >
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
              <button
                disabled={isSubmitting}
                type="submit"
                className="submit-button"
              >
                Send
              </button>

              <StyledSubmitMessage
                className="submit-message"
                color={feedBackContent[status].color}
                show={showFeedback}
              >
                {feedBackContent[status].message}
              </StyledSubmitMessage>
            </StyledContactForm>
          </StyledContactContainer>
        </WithView>
      </div>
    </StyledContactSection>
  );
};

export default Contacts;
