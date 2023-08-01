/**
 * @typedef {import("@prismicio/client").Content.IntroComoComprarSlice} IntroComoComprarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IntroComoComprarSlice>} IntroComoComprarProps
 * @param {IntroComoComprarProps}
 */

import React, { useRef, useEffect } from "react";
import { PrismicNextImage } from "@prismicio/next";

import { motion, useInView } from "framer-motion";

import styled from "styled-components";

const IntroWrapper = styled.section`
  padding-bottom: 8rem;
  .intro-como-comprar--inner {
    margin-top: -16rem;
    img {
      position: relative;
      margin: 0 auto;
      transition: 500ms transform ease-in-out;
    }
  }
`;
const IntroComoComprar = ({ slice }) => {
  const imageWrapperRef = useRef(null);
  const isInView = useInView(imageWrapperRef);

  return (
    <IntroWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={imageWrapperRef}
    >
      {slice.primary.imagem_destacada ? (
        <div className="page-wrapper">
          <div className="intro-como-comprar--inner">
            <PrismicNextImage
              field={slice.primary.imagem_destacada}
              imgixParams={{ q: 100 }}
              className="img-fluid"
              style={{
                transform: isInView
                  ? "rotate(0deg) scale(1)"
                  : "rotate(-15deg) rotate(0deg) scale(0.8)",
              }}
            />
          </div>
        </div>
      ) : null}
    </IntroWrapper>
  );
};

export default IntroComoComprar;
