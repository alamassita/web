import React from "react";

import { PrismicRichText } from "@prismicio/react";

import { StampsFormulario } from "../Stamps";
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
    padding-bottom: 10rem;
  }
  .hero-inner {
    display: flex;
    grid-gap: 4rem;
    padding-top: 4rem;
  }
  .hero-content {
    flex: 0 0 50%;
  }
  .hero-form {
    flex: 0 0 40%;
  }
  h1 {
    color: rgb(var(--gray-800));
    font-size: 7rem;
    line-height: 100%; /* 7rem */
    letter-spacing: -0.07rem;
    display: inline-block;
    margin-bottom: 0;
  }
  h2 {
    color: rgb(var(--primary-300));
    font-size: 2rem;
    line-height: 1.5em;
    margin-bottom: 2rem;
  }
  .hero-title {
    position: relative;
    display: inline-block;
    margin-top: 2rem;
    .stamp {
      position: absolute;
      transform-origin: center center;
      top: -52px;
      right: -72px;
    }
  }
  .hero-description {
    margin-bottom: 2rem;
    a {
      color: rgb(var(--teal));
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (max-width: 999px) {
    .hero-inner {
      flex-direction: column;
    }
    .hero-content,
    .hero-form {
      flex: 0 0 100%;
    }
    .form-wrapper {
      max-width: 100%;
    }
  }
`;

import { FormGeneral } from "../Form";

const HeroContato = ({ title, subtitle, content }) => {
  return (
    <HeroSection>
      <div className="hero-wrapper">
        <div className="page-wrapper">
          <div className="hero-title">
            <PrismicRichText field={title} />
            <motion.div
              className="stamp"
              animate={{ rotate: [0, 360] }}
              transition={{
                ease: "linear",
                duration: 10,
                repeat: Infinity,
              }}
            >
              <StampsFormulario />
            </motion.div>
          </div>
          <div className="hero-inner">
            <div className="hero-content">
              <PrismicRichText field={subtitle} />
              <div className="hero-description">
                <PrismicRichText field={content} />
              </div>
            </div>
            <div className="hero-form">
              <FormGeneral />
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default HeroContato;
