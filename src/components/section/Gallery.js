import React, { useState } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ChevronRight, ChevronLeft } from "../icons";

const StyledGallerySection = styled.section`
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;
  gap: 64px;
  align-items: center;
  .icon-wrapper {
    width: 24px;
    svg {
      width: 100%;
    }
  }
`;

const StyledCarouselItem = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  display: ${({ active }) => (active ? "block" : "none")};
  .carousel-image {
    border-radius: var(--border-radius);
  }
`;

const StyledDots = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
  ul {
    list-style: none;
    margin: 0%;
    padding: 0;
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

const StyledDot = styled.li`
  position: relative;
  width: ${({ active }) => (active ? "12px" : "8px")};
  height: ${({ active }) => (active ? "12px" : "8px")};
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "purple" : "gray")};
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
  const carouselLength = gallery[0].media_list.length;
  const [activeSlide, setActiveSlide] = useState(0);
  const getNext = () => {
    if (activeSlide === carouselLength - 1) setActiveSlide(0);
    else setActiveSlide(activeSlide + 1);
  };
  const getPrev = () => {
    if (activeSlide === 0) setActiveSlide(carouselLength - 1);
    else setActiveSlide(activeSlide - 1);
  };
  return (
    <StyledGallerySection id="other">
      <div className="section-title">Other Works</div>
      <StyledCarousel>
        <div className="icon-wrapper" onClick={() => getPrev()}>
          <ChevronLeft />
        </div>
        {gallery[0].media_list.map((item, index) => (
          <StyledCarouselItem key={index} active={index === activeSlide}>
            <GatsbyImage
              className="carousel-image"
              image={getImage(item.localFile)}
              alt={`${index} image`}
              key={index}
            />
          </StyledCarouselItem>
        ))}
        <div className="icon-wrapper" onClick={() => getNext()}>
          <ChevronRight />
        </div>
      </StyledCarousel>
      <StyledDots>
        <ul>
          {gallery[0].media_list.map((item, index) => (
            <StyledDot key={index} active={index === activeSlide}></StyledDot>
          ))}
        </ul>
      </StyledDots>
    </StyledGallerySection>
  );
};

export default Gallery;
