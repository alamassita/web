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
  overflow: hidden;

  .hero--inner {
    padding: 4rem 6rem;
    padding-bottom: 12rem;
    position: relative;
  }
  .stamp {
    position: absolute;
    // animation: rotate-anima 10s linear infinite;
    transform-origin: center center;
    z-index: 1;
    top: 0;
    left: 38px;
  }
  @keyframes rotate-anima {
    from {
      transform: rotate(-360deg);
    }
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
    right: 0;
    z-index: -1;
    height: auto;
    width: clamp(min(20vw, 20rem), 920px, max(60vw, 40rem));
  }
  .breadcrumbs {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    ol {
      list-style: none;
      padding: 0;
      li {
        display: inline-block;
        color: rgb(var(--mint-200));
        font-family: var(--font-geomanist);
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.015rem;
        a {
          color: rgb(var(--teal));
          transition: 300ms color ease-in-out;
          &:hover {
            color: rgb(var(--gold));
          }
        }
      }
      li + li {
        &::before {
          margin-left: 3px;
          content: " / ";
        }
      }
    }
  }
  .hero-category {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: rgb(var(--gray-800));
    text-align: center;
    font-family: var(--font-gallery);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.03rem;
    margin-bottom: 2rem;
    strong {
      display: block;
      letter-spacing: 0.7875rem;
      text-transform: uppercase;
      font-size: 0.875rem;
      flex: 0 0 100%;
      font-weight: 400;
      color: rgb(var(--primary-300));
    }
  }
  @media screen and (max-width: 1001px) {
    .hero--content {
      padding: 6rem 3rem;
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

const HeroPortfolio = ({
  title,
  image,
  content,
  categoriaName,
  categoriaURI,
}) => {
  return (
    <HeroSection>
      <div className="hero-wrapper">
        <HeroHome>
          <div className="page-wrapper">
            <div className="hero--inner">
              <div className="hero--content">
                {categoriaURI && (
                  <div className="breadcrumbs">
                    <ol>
                      <li>
                        <Link href="/portfolio">Portfólio</Link>
                      </li>
                      <li>
                        <Link href={`/${categoriaURI}`}>
                          {categoriaName[0].text}
                        </Link>
                      </li>
                      <li>
                        <span>{title[0].text}</span>
                      </li>
                    </ol>
                  </div>
                )}
                {categoriaURI === "pret-a-porter" ? (
                  <div className="hero-category">
                    <h4>Prêt-à-porter</h4>
                    <strong>Experience</strong>
                  </div>
                ) : null}
                {title && <PrismicRichText field={title} />}
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

export default HeroPortfolio;
