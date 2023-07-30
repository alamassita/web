/**
 * @typedef {import("@prismicio/client").Content.DepoimentosSlice} DepoimentosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DepoimentosSlice>} DepoimentosProps
 * @param {DepoimentosProps}
 */

import React, { useRef, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { ButtonWaterColor } from "../../components/Button";
import HeartBG from "../../../public/images/heartBG-001.svg";
import InkPhotoFrame from "../../../public/images/ink-photo-frame.png";
import InkTransitionSprite from "../../../public/images/ink-transition-sprite.png";

import { motion, useInView } from "framer-motion";

import styled from "styled-components";

const CtaSection = styled.div`
  background-color: rgb(var(--nudge));
  padding: 12rem 0;
  .testimonials-inner {
    display: flex;
  }
  .testimonials-image {
    padding: 0 2rem;
    width: 40%;
    align-self: center;
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  }
  .testimonials-content {
    width: 60%;
    background-image: url(${HeartBG.src});
    background-position: top 42px right -300px;
    background-repeat: no-repeat;
    padding: 0 2rem;
  }
  .testimonials-title h3 {
    margin-bottom: 6rem;
    padding-top: 7rem;
    color: rgb(var(--gray-800));
    font-family: Gallery Modern;
    font-size: 7rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.8em;
    letter-spacing: -0.14rem;
    text-align: right;
    b, strong {
      font-weight: 400;
      display: block;
      padding-right: 8rem;
    }
  }
  .testimonials-desc {
    max-width: 620px;
    p {
      color: rgb(var(--primary-200));
      font-family: var(--font-geomanist);
      font-size: 1rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.5em;
      margin-bottom: 1.5em;
    }
  }
  // Animation
  .c-transition {
    margin: rem(80) 0;
    overflow: hidden;
    position: relative;
    
    &::before {
      background-image: url(${InkPhotoFrame.src});
      background-size: 100% 100%;
      background-position: 50% 50%;
      content: '';
      height: 100%;
      position: absolute;
      width: 100%;
    }
    
    &::after {
      //animation: ink-transition 1.5s steps(39) 0.5s forwards;
      background-image: url(${InkTransitionSprite.src});
      background-size: 100% 100%;
      content: '';
      height: 100%;
      left: 50%;
      position: absolute;
      top: 0;
      transform: translateX(-1.25%);
      width: 4000%;
    }
    
    &.is-active::after {
      animation: ink-transition 1s steps(39) 0.3s forwards;
    }
    &.is-active .c-transition__img {
      opacity: 1;
    }
  }
  

  .c-transition__img {
    height: 100%;
    object-fit: cover;
    opacity: 0;
    width: 100%;
  }
  @keyframes ink-transition {
    0% {
      transform: translateX(-1.25%);
    }
  
    99% {
      transform: translateX(-98.75%);
      opacity: 1;
    }
  
    100% {
      transform: translateX(-98.75%);
      opacity: 0;
    }
  }
  @media screen and (min-width: 1420px) {
    .c-transition {
      margin-top: -10rem;
      margin-bottom: -10rem;
    }
    .testimonials-inner {
      justify-content: space-between;
    }
    .testimonials-image{
      width: 35%;
    }
    .testimonials-content {
        padding-right: calc((100vw - var(--max-width))/2 + 1rem);
        background-position: top 4rem right calc((100vw - var(--max-width))/2 - 320px);
    }
  }
  @media screen and (max-width: 1220px) {
    .testimonials-title h3 {
      padding-right: 6rem;
      b, strong {
        padding-right: 0;
      }
    }
  }
  @media screen and (max-width: 820px) {
    padding: 6rem 0;
    .testimonials-inner {
      flex-direction: column;
    }
    .testimonials-image {
      order: 2;
      margin-top: 3rem;
      margin-bottom: 0;
    }
    .testimonials-content {
      width: 100%;
    }
  }
}
`;

const Depoimentos = ({ slice }) => {
  const imageWaterColorRef = useRef(null);
  const isInView = useInView(imageWaterColorRef);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
    imageWaterColorRef.current.classList.toggle("is-active");
  }, [isInView]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "callToAction" ? (
        <CtaSection>
          <div className="testimonials-wrapper">
            <div className="testimonials-inner">
              <div className="testimonials-image">
                <motion.div
                  className="js-ink-trigger c-transition "
                  ref={imageWaterColorRef}
                >
                  <PrismicNextImage
                    field={slice.primary.imagem_destacada}
                    imgixParams={{ q: 100 }}
                    className="c-transition__img"
                  />
                </motion.div>
              </div>
              <div className="testimonials-content">
                <div className="testimonials-title">
                  <PrismicRichText field={slice.primary.titulo} />
                </div>
                <div className="testimonials-desc">
                  <PrismicRichText field={slice.primary.conteudo} />
                  <PrismicNextLink field={slice.primary.url}>
                    <ButtonWaterColor
                      text="Ver depoimentos"
                      variation="primary"
                    />
                  </PrismicNextLink>
                </div>
              </div>
            </div>
          </div>
        </CtaSection>
      ) : (
        ""
      )}
    </section>
  );
};

export default Depoimentos;
