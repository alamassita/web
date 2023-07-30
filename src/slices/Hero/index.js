/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { StampAmorCuidado } from "../../components/Stamps";
import PlantShadowImage from "../../../public/images/plant-shadow--hero.png";

import { motion } from "framer-motion";

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
  @media screen and (max-width: 1001px) {
    .hero--content {
      padding: 6rem 3rem;
    }
  }
  @media screen and (max-width: 881px) {
    .hero--inner {
      padding: 3rem 0;
    }
  }
`;

const Hero = ({ slice }) => {
  // console.log(slice);
  return (
    <HeroSection
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="hero-wrapper">
        {slice.variation === "home" ? (
          <HeroHome>
            <div className="page-wrapper">
              <div className="hero--inner">
                <motion.div
                  className="stamp"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    ease: "linear",
                    duration: 10,
                    repeat: Infinity,
                  }}
                >
                  <StampAmorCuidado />
                </motion.div>
                <div className="hero--content">
                  {slice.primary.subtitulo ? (
                    <PrismicRichText field={slice.primary.subtitulo} />
                  ) : (
                    ""
                  )}
                  {slice.primary.titulo ? (
                    <PrismicRichText field={slice.primary.titulo} />
                  ) : (
                    ""
                  )}
                  {slice.primary.conteudo ? (
                    <div className="hero--large-description">
                      <PrismicRichText field={slice.primary.conteudo} />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <PrismicNextImage
                field={slice.primary.imagem_destacada}
                imgixParams={{ q: 100 }}
              />
            </div>
          </HeroHome>
        ) : (
          ""
        )}
      </div>
    </HeroSection>
  );
};

export default Hero;
