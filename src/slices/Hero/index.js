/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { StampAmorCuidado, StampAssistaAoVideo } from "../../components/Stamps";
import { IconPlay } from "../../components/Icons";
import PlantShadowImage from "../../../public/images/plant-shadow--hero.png";

import WaterColorBG from "../../../public/images/bg-contato.png";
import QuemSomosVideoBG from "../../../public/images/bruna-quemSomos.svg";
import HeartQuemSomos from "../../../public/images/heartQuemSomos.png";

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
  &.quemSomos {
    .hero-wrapper {
      background-image: url(${WaterColorBG.src});
      background-repeat: no-repeat;
      background-position: top 12rem right -16rem;
    }
    .c-wrapper {
      overflow: initial;
    }
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
  // Quem somos

  .hero--grid {
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 4rem;
  }
  .hero--title {
    h1 {
      color: rgb(var(--gray-800));
      font-size: 7rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.9em;
      letter-spacing: -0.07rem;
      position: relative;
      strong {
        display: block;
        font-weight: 400;
      }
      &::before {
        content: "";
        position: absolute;
        width: 566px;
        height: 191px;
        background-image: url(${HeartQuemSomos.src});
        background-position: center center;
        background-size: cover;
        z-index: -1;
        top: 172px;
        left: -12px;
      }
    }
  }
  .hero--video {
    --videoWidth: 412px;
    background-image: url(${QuemSomosVideoBG.src});
    background-position: center top;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 11.5% 11.5% 0 11.5%;
    margin-bottom: -64px;
    position: relative;
    video {
      max-width: var(--videoWidth);
      width: 100%;
      border-radius: calc(var(--videoWidth) / 2);
      margin: auto;
      display: block;
    }
  }
  .hero--main {
    align-self: end;
    padding-bottom: 4rem;
  }
  .videoPlayButton {
    position: absolute;
    top: 50%;
    left: 0;
    width: 124px;
    height: 124px;
    margin-left: -44px;
    margin-top: -12px;
    transform: scale(0.8);
    transform-origin: center center;
    transition: 300ms transform cubic-bezier(0.68, -0.6, 0.32, 1.6);
    &:hover {
      transform: scale(1);
      cursor: pointer;
    }
    .videoPlayButton--inner {
      position: relative;
    }
    .videoPlayButton--animate {
      transform-origin: center center;
    }
    .videoPlayButton--icon {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: 6px;
      margin-top: 2px;
      transform: translate3d(-50%, -50%, 0);
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

const Hero = ({ slice }) => {
  console.log(slice);
  return (
    <HeroSection
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.variation}
    >
      <div className="hero-wrapper">
        {slice.variation === "home" ||
        slice.variation === "comoComprar" ||
        slice.variation === "default" ? (
          <HeroHome>
            <div className="page-wrapper">
              <div className="hero--inner">
                {slice.variation === "home" ? (
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
                ) : null}
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
        {slice.variation === "quemSomos" ? (
          <HeroHome className="c-wrapper">
            <div className="page-wrapper">
              <div className="hero--grid">
                <div className="hero--title">
                  <PrismicRichText field={slice.primary.titulo} />
                </div>
                <div className="hero--video">
                  <video
                    autoPlay={true}
                    playsInline={true}
                    loop={true}
                    muted={true}
                  >
                    <source
                      src={slice.primary.video_chamada.url}
                      type="video/mp4"
                    />
                  </video>
                  <div className="videoPlayButton">
                    <div className="videoPlayButton--inner">
                      <motion.div
                        className="videoPlayButton--animate"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          ease: "linear",
                          duration: 10,
                          repeat: Infinity,
                        }}
                      >
                        <StampAssistaAoVideo />
                      </motion.div>
                      <div className="videoPlayButton--icon">
                        <IconPlay />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero--main">
                  <PrismicRichText field={slice.primary.conteudo} />
                </div>
              </div>
            </div>
          </HeroHome>
        ) : null}
      </div>
    </HeroSection>
  );
};

export default Hero;
