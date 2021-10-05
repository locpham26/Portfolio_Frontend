import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 96px;
`;

const StyledProjectList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
`;

const StyledProjectItem = styled.li`
  margin-bottom: 96px;
  .item-inner {
    display: flex;
    flex-direction: ${({ isOdd }) => (isOdd ? "row" : "row-reverse")};
    align-items: center;
  }
`;

const StyledProjectImage = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  position: relative;
  .image-inner {
    border-radius: var(--border-radius);
    position: relative;
    &:hover {
      &::before {
        background-color: transparent;
      }
    }
    &::before {
      content: " ";
      border-radius: var(--border-radius);
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: ${({ theme }) => theme.mainPurple};
      opacity: 0.13;
      z-index: 1;
    }
    .project-item-image {
      max-width: 100%;
      border-radius: var(--border-radius);
    }
  }
`;

const StyledProjectInfo = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  position: relative;
  z-index: 2;
  .info-inner {
    position: relative;
    right: ${({ isOdd }) => (isOdd ? "64px" : "-64px")};
    border-radius: var(--border-radius);
    border: 1px solid black;
    background-color: white;
    width: 100%;
    height: 240px;
    padding: 24px;
    .decoration {
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      position: absolute;
      top: 18px;
      left: ${({ isOdd }) => (isOdd ? "18px" : "-18px")};
      transform: ${({ isOdd }) => (isOdd ? "rotate(3deg)" : "rotate(-3deg)")};
      background-color: ${({ decorationColor }) => decorationColor};
    }
    .project-item-name {
      color: ${({ decorationColor }) => decorationColor};
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 16px;
      box-sizing: border-box;
    }
    .project-item-description {
      color: var(--primary-text);
      font-size: 16px;
      margin: 0px;
      margin-bottom: 16px;
      box-sizing: border-box;
    }
    .project-item-tool-list {
      display: flex;
      position: relative;
      list-style: none;
      padding: 0px;
      margin: 0px;
      li {
        margin-right: 16px;
        color: var(--secondary-text);
        font-size: 16px;
      }
    }
  }
`;

const StyledOtherContainer = styled.section`
  width: 100%;
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 48px;
    list-style: none;
    padding: 0px;
    margin: 0px;
    width: 100%;
  }
`;

const StyledProjectCard = styled.li`
  position: relative;
  width: 100%;
  .project-card-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    padding: 16px;
    border-radius: var(--border-radius);
    background-color: #fff4ff;
    .project-name {
      font-size: 20px;
      font-weight: 500;
      color: var(--primary-text);
    }
    .project-description {
      font-size: 16px;
      font-weight: 400;
      color: var(--secondary-text);
    }
    .project-stack {
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.mainPurple};
    }
  }
`;

const Projects = () => {
  const { mainPurple, secondaryPurple, mainYellow } = useContext(ThemeContext);
  return (
    <ProjectSection id="projects">
      <div className="section-title">Projects</div>
      <StyledProjectList>
        <StyledProjectItem isOdd={true}>
          <div className="item-inner">
            <StyledProjectImage>
              <div className="image-inner">
                <StaticImage
                  className="project-item-image"
                  src="../../images/background.jpg"
                  alt="bg"
                />
              </div>
            </StyledProjectImage>
            <StyledProjectInfo isOdd={true} decorationColor={mainPurple}>
              <div className="info-inner">
                <div className="decoration"></div>
                <div className="project-item-name">Werewolf Board Game</div>
                <div className="project-item-description">
                  A simple online board game that allowed users to play and chat
                  simultaneously. A simple online board game that allowed users
                  to play and chat simultaneously. A simple online board game
                  that allowed users to play and chat simultaneously
                </div>
                <ul className="project-item-tool-list">
                  <li>Vue</li>
                  <li>Django</li>
                </ul>
              </div>
            </StyledProjectInfo>
          </div>
        </StyledProjectItem>
        <StyledProjectItem isOdd={false}>
          <div className="item-inner">
            <StyledProjectImage>
              <div className="image-inner"></div>
            </StyledProjectImage>
            <StyledProjectInfo isOdd={false} decorationColor={secondaryPurple}>
              <div className="info-inner">
                <div className="decoration"></div>
              </div>
            </StyledProjectInfo>
          </div>
        </StyledProjectItem>
        <StyledProjectItem isOdd={true}>
          <div className="item-inner">
            <StyledProjectImage>
              <div className="image-inner"></div>
            </StyledProjectImage>
            <StyledProjectInfo isOdd={true} decorationColor={mainYellow}>
              <div className="info-inner">
                <div className="decoration"></div>
              </div>
            </StyledProjectInfo>
          </div>
        </StyledProjectItem>
      </StyledProjectList>
      <div className="section-title">Other Projects</div>
      <StyledOtherContainer>
        <ul className="projects-grid">
          <StyledProjectCard>
            <div className="project-card-inner">
              <p className="project-name">Task Manager</p>
              <p className="project-description">
                Lorem ufd nasds msd sdn knkds nakdn{" "}
              </p>
              <p className="project-stack">Vue</p>
            </div>
          </StyledProjectCard>
          <StyledProjectCard>
            <div className="project-card-inner">
              <p className="project-name">Task Manager</p>
            </div>
          </StyledProjectCard>
          <StyledProjectCard>
            <div className="project-card-inner">
              <p className="project-name">Task Manager</p>
            </div>
          </StyledProjectCard>
        </ul>
      </StyledOtherContainer>
    </ProjectSection>
  );
};

export default Projects;
