import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { DesignIcon, MobileIcon, WebIcon } from "../icons";
import { motion } from "framer-motion";

const StyledAboutSection = styled.section`
  width: 100%;
  .inner {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 192px;
    .intro-text {
      color: var(--secondary-text);
      font-size: 16px;
      text-align: center;
      .school-name {
        color: var(--primary-purple);
      }
    }
    .resume-button {
      border: 1px solid var(--primary-purple);
      color: var(--primary-purple);
      border-radius: 32px;
      font-weight: 400;
      font-size: 18px;
      width: fit-content;
      padding: 12px 24px;
      background-color: white;
      cursor: pointer;
      margin-top: 24px;
      transition: 0.4s;
      &:hover,
      &:focus {
        color: white;
        border: 1px solid ${({ theme }) => theme.mainPurple};
        box-shadow: inset 0 0 0 2em ${({ theme }) => theme.mainPurple};
        transform: translateY(-4px);
      }
    }
  }
`;

const StyledSkillList = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 32px;
  .skill-box-inner {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26%, 1fr));
    grid-gap: 64px;
  }
`;

const StyledSkillCard = styled.div`
  position: relative;
  border-radius: var(--border-radius);
  border: 1px solid #dddeee;
  background-color: white;
  &:hover {
    box-shadow: 4px 4px 10px rgb(0 0 0 / 16%);
  }
  .decoration-dots {
    position: absolute;
    left: 100%;
    top: 128px;
    width: fit-content;
    overflow: hidden;
    white-space: nowrap;
    line-height: 0;
    .dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${({ color }) => color};
      margin: 8px 4px;
    }
  }
  .skill-card-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    padding: 40px;
    border-radius: var(--border-radius);
    .icon-wrapper {
      width: 64px;
      height: 64px;
      background-color: ${({ color }) => color};
      border-radius: 12px;
      ${({ theme }) => theme.mixins.flexCenter};
      box-sizing: border-box;
      margin-bottom: 40px;
    }
    .title {
      font-weight: 500;
      font-size: 24px;
      box-sizing: border-box;
      color: var(--primary-text);
      margin-bottom: 16px;
      text-align: center;
    }
    .description {
      color: var(--primary-text);
      font-size: 16px;
      text-align: center;
      color: var(--secondary-text);
    }
  }
`;

const educationText =
  "I am currently a senior majoring in Computer Science at ";
const universityName = "Texas Christian University";
const jobText =
  "I am a full-stack developer. Creating web apps and mobile apps is my passion.";
const additionalText = "I can also work on UI and UX design.";

const skillItems = [
  {
    key: "web",
    title: "Web Development",
    description:
      "Deep v succulents biodiesel godard man bun, master cleanse slow-carb affogato yr cronut seitan. Man braid glossier banh mi, deep v salvia lo-fi jianbing forage air plant fam.",
    icon: <WebIcon />,
  },
  {
    key: "mobile",
    title: "Mobile Development",
    description:
      "Deep v succulents biodiesel godard man bun, master cleanse slow-carb affogato yr cronut seitan. Man braid glossier banh mi, deep v salvia lo-fi jianbing forage air plant fam.",
    icon: <MobileIcon />,
  },
  {
    key: "design",
    title: "UI UX Design",
    description:
      "Deep v succulents biodiesel godard man bun, master cleanse slow-carb affogato yr cronut seitan. Man braid glossier banh mi, deep v salvia lo-fi jianbing forage air plant fam.",
    icon: <DesignIcon />,
  },
];

const dotParentVariant = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const dotVariant = {
  start: {
    y: 0,
  },
  end: {
    y: 8,
  },
};

const About = () => {
  const { mainBlue, mainPink, mainPurple } = useContext(ThemeContext);
  const colorList = [mainPurple, mainBlue, mainPink];
  return (
    <StyledAboutSection id="about">
      <div className="inner">
        <div className="section-title">About me</div>
        <p className="intro-text">
          {educationText}
          <span className="school-name">{universityName}</span>.
        </p>
        <p className="intro-text">{jobText}</p>
        <p className="intro-text">{additionalText}</p>
        <div className="resume-button">View My Resume</div>
        <StyledSkillList>
          <div className="skill-box-inner">
            {skillItems.map((item, index) => (
              <StyledSkillCard key={item.key} color={colorList[index]}>
                <div className="skill-card-inner">
                  <div className="icon-wrapper">{item.icon}</div>
                  <div className="title">{item.title}</div>
                  <div className="description">{item.description}</div>
                </div>
                {index !== 2 && (
                  <motion.div
                    className="decoration-dots"
                    variants={dotParentVariant}
                    initial="start"
                    animate="end"
                  >
                    {[0, 1, 2, 3, 4].map((_, i) => (
                      <motion.div
                        key={i}
                        className="dot"
                        variants={dotVariant}
                        transition={{
                          duration: 0.3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      ></motion.div>
                    ))}
                  </motion.div>
                )}
              </StyledSkillCard>
            ))}
          </div>
        </StyledSkillList>
      </div>
    </StyledAboutSection>
  );
};

export default About;
