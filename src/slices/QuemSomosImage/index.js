/**
 * @typedef {import("@prismicio/client").Content.QuemSomosImageSlice} QuemSomosImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<QuemSomosImageSlice>} QuemSomosImageProps
 * @param {QuemSomosImageProps}
 */

import React, { useRef, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import InkPhotoFrame from "../../../public/images/ink-photo-frame.png";
import InkTransitionSprite from "../../../public/images/ink-transition-sprite.png";

import { motion, useInView } from "framer-motion";

import styled from "styled-components";

const QuemSomosImageWrapper = styled.section`
  padding-bottom: 8rem;
  background-color: rgb(var(--nudge));
  .section-inner {
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  .section-content {
    align-self: center;
  }
  .c-transition {
    margin: rem(80) 0;
    overflow: hidden;
    position: relative;

    &::before {
      background-image: url(${InkPhotoFrame.src});
      background-size: 100% 100%;
      background-position: 50% 50%;
      content: "";
      height: 100%;
      position: absolute;
      width: 100%;
    }

    &::after {
      //animation: ink-transition 1.5s steps(39) 0.5s forwards;
      background-image: url(${InkTransitionSprite.src});
      background-size: 100% 100%;
      content: "";
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
  @media screen and (max-width: 640px) {
    .section-inner {
      display: flex;
      grid-gap: 2rem;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
const QuemSomosImage = ({ slice }) => {
  const imageWaterColorRef = useRef(null);
  const isInView = useInView(imageWaterColorRef);

  useEffect(() => {
    imageWaterColorRef.current.classList.toggle("is-active");
  }, [isInView]);
  return (
    <QuemSomosImageWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="page-wrapper">
        <div className="section-inner">
          <div className="section-image">
            <motion.div
              className="js-ink-trigger c-transition "
              ref={imageWaterColorRef}
            >
              <PrismicNextImage
                field={slice.primary.imagem_destacada}
                imgixParams={{ q: 100 }}
                className="c-transition__img img-fluid"
              />
            </motion.div>
          </div>
          <div className="section-content">
            <PrismicRichText field={slice.primary.conteudo} />
          </div>
        </div>
      </div>
    </QuemSomosImageWrapper>
  );
};

export default QuemSomosImage;
