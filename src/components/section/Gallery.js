import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StyledGallerySection = styled.section`
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .inner {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`;

const StyledLeftCol = styled.div`
  flex: 0 0 50%;
  position: relative;
  .left-inner {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .gallery-image {
      border-radius: var(--border-radius);
      max-width: 100%;
    }
    .left-inner-bottom {
      display: flex;
      gap: 16px;
      .gallery-image {
        border-radius: var(--border-radius);
        width: 50%;
      }
    }
  }
`;

const StyledRightCol = styled.div`
  flex: 0 0 30%;
  /* height: 100%; */
  position: relative;
  .right-inner {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
    justify-content: space-between;
    .gallery-image {
      border-radius: var(--border-radius);
      max-width: 100%;
    }
    .clarification-text {
      color: white;
      border-radius: var(--border-radius);
      background-color: var(--primary-purple);
      width: 100%;
      padding: 24px;
    }
  }
`;

export const query = graphql`
  {
    allStrapiGallery {
      nodes {
        media_list {
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
const Gallery = () => {
  const {
    allStrapiGallery: { nodes: gallery },
  } = useStaticQuery(query);
  const [ams_cup, limitless, basketball, soccer, olympiams, sixth_design] =
    gallery[0].media_list;
  return (
    <StyledGallerySection id="other">
      <div className="section-title">Other Works</div>
      <div className="inner">
        <StyledLeftCol>
          <div className="left-inner">
            <GatsbyImage
              className="gallery-image"
              image={getImage(soccer.localFile)}
              alt="first"
            />
            <div className="left-inner-bottom">
              <GatsbyImage
                className="gallery-image"
                image={getImage(ams_cup.localFile)}
                alt="third"
              />
              <GatsbyImage
                className="gallery-image"
                image={getImage(olympiams.localFile)}
                alt="fourth"
              />
            </div>
          </div>
        </StyledLeftCol>
        <StyledRightCol>
          <div className="right-inner">
            <GatsbyImage
              className="gallery-image"
              image={getImage(basketball.localFile)}
              alt="second"
            />
            <GatsbyImage
              className="gallery-image"
              image={getImage(limitless.localFile)}
              alt="second"
            />
            <div className="clarification-text">
              Apart from being a software engineer
            </div>
          </div>
        </StyledRightCol>
      </div>
    </StyledGallerySection>
  );
};

export default Gallery;
