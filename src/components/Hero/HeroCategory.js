import React from "react";
import Link from "next/link";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import PlantShadowImage from "../../../public/images/plant-shadow--hero.png";

import styled from "styled-components";
const HeroSection = styled.section`
  background-color: rgb(var(--nudge));
  background-image: url(${PlantShadowImage.src});
  background-position: top left;
  background-repeat: no-repeat;
  .hero-wrapper {
    padding-top: 11rem;
  }
`;
const HeroHome = styled.div`
  position: relative;
  isolation: isolate;
  .hero--inner {
    padding: 4rem 6rem;
    padding-bottom: 6rem;
    position: relative;
  }
  .hero--content {
    padding: 6rem;
    padding-top: 2rem;
    background-color: rgba(248, 248, 248, 0.8);
    backdrop-filter: blur(6px);
    h2 {
      color: rgb(var(--pink-300));
      font-family: var(--font-geomanist);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.1875rem;
      text-transform: uppercase;
      margin-bottom: 1rem;
      text-align: center;
    }
    h1 {
      color: rgb(var(--gray-800));
      text-align: center;
      font-family: var(--font-gallery);
      font-size: 5.75rem;
      font-size: clamp(3.5rem, 10vw, 5.75rem);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.115rem;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
  .signature {
    .hero--content {
      background-color: rgba(var(--gray-800), 0.98);
      h1 {
        color: rgb(var(--gray-100));
      }
      h2 {
      }
      .hero-category {
        strong {
          color: rgb(var(--pink-300));
        }
      }
      .hero--large-description {
        p {
          color: rgb(var(--gray-100));
        }
      }
    }
  }
  .hero--large-description {
    max-width: 720px;
    margin: 0 auto;
    p {
      font-size: 1.125rem;
      text-align: center;
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    z-index: -1;
    height: auto;
    width: clamp(min(20vw, 20rem), 510px, max(60vw, 40rem));
  }

  .hero-category {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: rgb(var(--gray-800));
    text-align: center;
    font-family: var(--font-gallery);
    font-size: 5.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.03rem;
    margin-bottom: 2rem;
    padding-top: 4rem;
    strong {
      display: block;
      letter-spacing: 0.7875rem;
      text-transform: uppercase;
      font-size: 1.5rem;
      flex: 0 0 100%;
      font-weight: 400;
      color: rgb(var(--primary-300));
    }
  }
  @media screen and (max-width: 1001px) {
    .hero--content {
      padding: 6rem 3rem;
      padding: clamp(2rem, 10vw, 6rem) clamp(1rem, 10vw, 3rem);
    }
    .hero--grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
    .hero--title {
      grid-area: 1 / 1 / 2 / 2;
    }
    .hero--video {
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      .videoPlayButton {
        top: auto;
        bottom: 4px;
        left: auto;
        right: 0;
        margin-top: 0;
        margin-left: 24px;
      }
    }
    .hero--main {
      grid-area: 2 / 1 / 3 / 2;
    }
  }
  @media screen and (max-width: 881px) {
    .hero--inner {
      padding: 3rem 0;
    }
  }
`;

const HeroCategory = ({ title, image, content, categoriaURI }) => {
  return (
    <HeroSection>
      <div className="hero-wrapper">
        <HeroHome>
          <div className={`page-wrapper ${categoriaURI}`}>
            <div className="hero--inner">
              <div className="hero--content">
                {categoriaURI === "pret-a-porter" ? (
                  <div className="hero-category">
                    <h1>{title[0].text}</h1>
                    <strong>Experience</strong>
                  </div>
                ) : null}
                {categoriaURI === "signature" ? (
                  <div className="hero-category">
                    <h1>{title[0].text}</h1>
                    <strong>Experience</strong>
                  </div>
                ) : null}
                {content && (
                  <div className="hero--large-description">
                    <PrismicRichText field={content} />
                  </div>
                )}
              </div>
              {image && (
                <PrismicNextImage field={image} imgixParams={{ q: 100 }} />
              )}
            </div>
          </div>
        </HeroHome>
      </div>
    </HeroSection>
  );
};

export default HeroCategory;
