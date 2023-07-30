/**
 * @typedef {import("@prismicio/client").Content.QuemSouEuSlice} QuemSouEuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<QuemSouEuSlice>} QuemSouEuProps
 * @param {QuemSouEuProps}
 */

import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { ButtonWaterColor } from "../../components/Button";

import styled from "styled-components";

const QuemSouWrapper = styled.section`
  padding-top: 12rem;
  .quem-title h3 {
    color: rgb(var(--gray-800));
    text-align: center;
    font-family: var(--font-gallery);
    font-size: 7rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.07rem;
    margin-bottom: -6rem;
    position: relative;
    z-index: 2;
  }
  .quem-inner {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    .quem-subtitle--content {
      padding-top: 12rem;
      max-width: 224px;
      p {
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 150%; /* 1.125rem */
        letter-spacing: 0.1875rem;
        text-transform: uppercase;
      }
    }
    .quem-image {
      img {
        max-width: 100%;
      }
    }
    .quem-content {
      align-self: flex-end;
      padding-bottom: 6rem;
      p {
        color: rgb(var(--primary-200));
        font-family: var(--font-geomanist);
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        margin-bottom: 1.5rem;
      }
    }
  }
`;

const QuemSouEu = ({ slice }) => {
  return (
    <QuemSouWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="page-wrapper">
        <div className="quem-wrapper">
          <div className="quem-title">
            <PrismicRichText field={slice.primary.titulo} />
          </div>
          <div className="quem-inner">
            <div className="quem-subtitle">
              <div className="quem-subtitle--content">
                <PrismicRichText field={slice.primary.subtitulo} />
              </div>
            </div>
            <div className="quem-image">
              <PrismicNextImage
                field={slice.primary.imagem_de}
                imgixParams={{ q: 100 }}
                className="img-fluid"
              />
            </div>
            <div className="quem-content">
              <PrismicRichText field={slice.primary.conteudo} />
              <PrismicNextLink field={slice.primary.url}>
                <ButtonWaterColor text="Saiba mais" variation="primary" />
              </PrismicNextLink>
            </div>
          </div>
        </div>
      </div>
    </QuemSouWrapper>
  );
};

export default QuemSouEu;
