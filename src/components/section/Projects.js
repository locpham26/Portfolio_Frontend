import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import WithView from "../hooks/withView";
import SectionTitle from "../SectionTitle";
import { graphql, useStaticQuery } from "gatsby";
import { GithubIcon, LinkIcon } from "../icons";

const ProjectSection = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 192px;
  max-width: 1600px;
  .other-title {
    color: ${({ theme }) => theme.mainTeal};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 32px;
    font-family: var(--font-sans-serif);
    text-align: center;
    letter-spacing: 0.08rem;
  }
`;

const StyledProjectList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
`;

const StyledProjectItem = styled.li`
  margin-bottom: 120px;
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
    height: 100%;
    display: block;
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
    border: 1px solid #dddddd;
    background-color: white;
    width: 100%;
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
      background-color: ${({ theme }) => theme.mainPurple};
    }
    .project-item-name {
      color: ${({ theme }) => theme.mainDarkText};
      font-family: var(--font-sans-serif);
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 8px;
      box-sizing: border-box;
    }
    .project-item-description {
      color: ${({ theme }) => theme.secondaryDarkText};
      font-size: 16px;
      margin: 0px;
      margin-bottom: 8px;
      box-sizing: border-box;
    }
    .project-item-tool-list {
      display: flex;
      position: relative;
      list-style: none;
      padding: 0px;
      margin: 0px;
      margin-bottom: 16px;
      li {
        margin-right: 16px;
        color: ${({ theme }) => theme.mainPurple};
        font-size: 16px;
      }
    }
    .project-item-icon-wrapper {
      margin-right: 16px;
      &:hover {
        svg {
          fill: ${({ theme }) => theme.mainPurple};
        }
      }
      svg {
        width: 20px;
        height: 20px;
        fill: var(--primary-text);
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
  border-radius: var(--border-radius);
  border: 1px solid #dddeee;
  &:hover {
    box-shadow: 4px 4px 10px rgb(0 0 0 / 16%);
  }
  .project-card-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    padding: 16px;
    border-radius: var(--border-radius);
    background-color: white;
    .project-name {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 16px;
      box-sizing: border-box;
      color: var(--primary-text);
    }
    .project-description {
      font-size: 16px;
      margin: 0px;
      margin-bottom: 16px;
      box-sizing: border-box;
      color: var(--secondary-text);
    }
    .project-stack {
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.mainPurple};
    }
  }
`;

const projectVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Projects = () => {
  const {
    allStrapiProjects: { nodes: projects },
  } = useStaticQuery(query);
  return (
    <ProjectSection id="projects">
      <SectionTitle
        title="3. Projects"
        subtitle="The projects I have been working on"
      />
      <StyledProjectList>
        {projects.map((project, index) => (
          <WithView
            initial="hidden"
            animation="show"
            variants={projectVariants}
            key={project.strapiId}
          >
            <StyledProjectItem key={project.id} isOdd={(index + 1) % 2 !== 0}>
              <div className="item-inner">
                <StyledProjectImage>
                  <a
                    className="image-inner"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GatsbyImage
                      className="project-item-image"
                      image={getImage(project.image.localFile)}
                      alt="bg"
                    />
                  </a>
                </StyledProjectImage>
                <StyledProjectInfo isOdd={(index + 1) % 2 !== 0}>
                  <div className="info-inner">
                    <div className="decoration"></div>
                    <div className="project-item-name">{project.name}</div>
                    <div className="project-item-description">
                      {project.description}
                    </div>
                    <ul className="project-item-tool-list">
                      {project.tool.map((t) => (
                        <li key={t.id}>{t.name}</li>
                      ))}
                    </ul>
                    <div>
                      <a
                        className="project-item-icon-wrapper"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                      </a>
                      <a
                        className="project-item-icon-wrapper"
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </div>
                  </div>
                </StyledProjectInfo>
              </div>
            </StyledProjectItem>
          </WithView>
        ))}
      </StyledProjectList>
      {/* <h3 className="other-title">Other Projects</h3>
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
      </StyledOtherContainer> */}
    </ProjectSection>
  );
};

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        tool {
          id
          name
        }
        repo
        strapiId
        name
        link
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default Projects;
