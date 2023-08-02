/**
 * @typedef {import("@prismicio/client").Content.IntroQuemSomosSlice} IntroQuemSomosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IntroQuemSomosSlice>} IntroQuemSomosProps
 * @param {IntroQuemSomosProps}
 */

import React from "react";
import { PrismicRichText } from "@prismicio/react";

import styled from "styled-components";

const IntroQuemSomosWrapper = styled.section`
  padding: 8rem 0;
  .intro--inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
  }
  h3 {
    color: rgb(var(--gray-800));
    font-size: 3.875rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.03875rem;
    margin-bottom: 2rem;
  }
  h4 {
    color: rgb(var(--primary-300));
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5em;
  }
  .intro--blockquote {
    p {
      padding-top: 6rem;
      font-family: var(--font-gallery);
      color: rgb(var(--mint-200));
      font-size: 3.875rem;
      line-height: 1.5em;
      text-align: center;
    }
  }
  @media screen and (max-width: 640px) {
    .intro--inner {
      display: flex;
      grid-gap: 2rem;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
const IntroQuemSomos = ({ slice }) => {
  return (
    <IntroQuemSomosWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="page-wrapper">
        <div className="intro--section">
          <PrismicRichText field={slice.primary.titulo} />
        </div>
        <div className="intro--inner">
          <div className="intro--title">
            <PrismicRichText field={slice.primary.subtitulo} />
          </div>
          <div className="intro--content">
            <PrismicRichText field={slice.primary.conteudo} />
          </div>
        </div>
        <div className="intro--blockquote">
          <PrismicRichText field={slice.primary.citacao} />
        </div>
      </div>
    </IntroQuemSomosWrapper>
  );
};

export default IntroQuemSomos;
