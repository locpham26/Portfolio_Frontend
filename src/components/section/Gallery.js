import React, { useState } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ChevronRight, ChevronLeft } from "../icons";
import WithView from "../hooks/withView";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";

const StyledGallerySection = styled.section`
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: 96px;
  max-width: 1600px;
`;

const StyledCarousel = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 64px;
  /* max-width: 800px;
  max-height: 800px; */
  align-items: center;
  .icon-wrapper {
    width: 40px;
    cursor: pointer;
    padding: 4px;
    border: none;
    outline: none;
    background-color: transparent;
    border-radius: var(--border-radius);
    transition: 0.4s;
    &:hover {
      svg {
        fill: ${({ theme }) => theme.mainPurple};
      }
    }
    svg {
      width: 24px;
      fill: #1a1c1c;
    }
  }
`;

const StyledCarouselItem = styled.div`
  position: relative;
  display: ${({ active }) => (active ? "block" : "none")};
  max-width: 800px;
  max-height: 800px;
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
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: transparent;
  padding: 2px;
  border: 1px solid #aaabbb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .dot-inner {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transition: 0.4s;
    background-color: ${({ active, theme }) =>
      active ? theme.mainPurple : "transparent"};
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

const variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
    },
  },
};

// const galleryVariant

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
  const getToImage = (imageIndex) => {
    setActiveSlide(imageIndex);
  };
  return (
    <StyledGallerySection id="other">
      <SectionTitle
        title="4. Other Works"
        subtitle="The logos and posters I designed"
      />
      <WithView initial="hidden" animation="show" variants={variants}>
        <StyledCarousel>
          <motion.button className="icon-wrapper" onClick={getPrev}>
            <ChevronLeft />
          </motion.button>
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
          <motion.button className="icon-wrapper" onClick={getNext}>
            <ChevronRight />
          </motion.button>
        </StyledCarousel>
      </WithView>
      <StyledDots>
        <ul>
          {gallery[0].media_list.map((item, index) => (
            <StyledDot
              key={index}
              active={index === activeSlide}
              onClick={() => getToImage(index)}
            >
              <div className="dot-inner"></div>
            </StyledDot>
          ))}
        </ul>
      </StyledDots>
    </StyledGallerySection>
  );
};

export default Gallery;
