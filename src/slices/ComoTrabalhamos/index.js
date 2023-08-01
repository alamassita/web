/**
 * @typedef {import("@prismicio/client").Content.ComoTrabalhamosSlice} ComoTrabalhamosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ComoTrabalhamosSlice>} ComoTrabalhamosProps
 * @param {ComoTrabalhamosProps}
 */

import React, { useRef } from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import HeartElement from "../../../public/images/heartComoComprar.png";

import { useInView } from "framer-motion";

import styled from "styled-components";

const ComoTrabalhamosWrapper = styled.section`
  padding-bottom: 6rem;
  padding-top: 6rem;
  .section-Number {
    color: rgb(var(--gray-200));
    font-family: var(--font-gallery);
    font-size: 7.5rem;
    line-height: 1;
  }
  h3 {
    color: rgb(var(--gray-800));
    font-family: var(--font-gallery);
    font-size: 3.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.03875rem;
    margin-bottom: 2rem;
  }
  h4 {
    color: rgb(var(--primary-300));
    font-family: var(--font-gallery);
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5em;
  }
  .como-trabalhamos--wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
  }
  &.umaColuna,
  &.duasColunas {
    h4 {
      margin-bottom: 2rem;
    }
  }
  .img-fluid {
    margin: 0 auto;
    transition: 500ms transform cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  .secondary-content {
    align-self: center;
  }
  &.umaColuna {
    .page-wrapper {
      position: relative;
      &:after {
        top: 50%;
        right: 0;
        position: absolute;
        z-index: -1;
        content: "";
        width: 628px;
        height: 999px;
        margin-right: -315px;
        background-image: url(${HeartElement.src});
        background-position: center center;
        background-size: cover;
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }
  @media screen and (max-width: 975px) {
    &.umaColuna .page-wrapper:after {
      margin-right: -405px;
    }
  }
  @media screen and (max-width: 660px) {
    .como-trabalhamos--wrapper {
      display: flex;
      flex-direction: column;
      grid-gap: 4rem;
    }
    &.umaColuna .page-wrapper:after {
      content: none;
    }
  }
`;

const ComoTrabalhamos = ({ slice }) => {
  const imageWrapperRef = useRef(null);
  const isInView = useInView(imageWrapperRef);

  return (
    <ComoTrabalhamosWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.variation}
      ref={imageWrapperRef}
    >
      <div className="page-wrapper">
        {slice.variation === "default" || slice.variation === "umaColuna" ? (
          <>
            <div className="section-Number">
              0{slice.primary.numero_da_secao}
            </div>
            <PrismicRichText field={slice.primary.titulo} />
          </>
        ) : null}
        <div className="como-trabalhamos--wrapper">
          {slice.variation === "default" ? (
            <>
              <div className="content main-content">
                <PrismicRichText field={slice.primary.subtitulo} />
              </div>
              <div className="content secondary-content">
                <PrismicRichText field={slice.primary.conteudo} />
              </div>
            </>
          ) : null}
          {slice.variation === "umaColuna" ? (
            <>
              <div className="content main-content">
                <PrismicRichText field={slice.primary.subtitulo} />
                <PrismicRichText field={slice.primary.conteudo} />
              </div>
            </>
          ) : null}
          {slice.variation === "duasColunas" ? (
            <>
              <div className="content main-content">
                <div className="section-Number">
                  0{slice.primary.numero_da_secao}
                </div>
                <PrismicRichText field={slice.primary.titulo} />
                <PrismicRichText field={slice.primary.subtitulo} />
                <PrismicRichText field={slice.primary.conteudo} />
              </div>
              <div className="content secondary-content">
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
            </>
          ) : null}
        </div>
      </div>
    </ComoTrabalhamosWrapper>
  );
};

export default ComoTrabalhamos;
