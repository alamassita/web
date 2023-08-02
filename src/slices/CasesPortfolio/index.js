/**
 * @typedef {import("@prismicio/client").Content.CasesPortfolioSlice} CasesPortfolioSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CasesPortfolioSlice>} CasesPortfolioProps
 * @param {CasesPortfolioProps}
 */

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { ButtonWaterColor } from "../../components/Button";

import styled from "styled-components";

const CasesPortfolioWrapper = styled.section`
  display: flex;
  width: 100%;
  .card-porfolio {
    flex: 1;
    padding: 8rem 0;
    padding-top: 12rem;
    .card-porfolio--inner {
      position: relative;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    h4 {
      font-family: var(--font-geomanist);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.125em;
      letter-spacing: 0.3375em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    h3 {
      color: rgb(var(--nudge));
      font-family: var(--font-gallery);
      font-size: 5.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5em;
      letter-spacing: -0.1025rem;
    }
    .card-portfolio--actions {
      padding-top: 8rem;
      color: rgb(var(--primary-300));
      font-size: 1.125rem;
      font-weight: 300;
      line-height: 1.5em;
      max-width: 190px;
      p {
        margin-bottom: 3rem;
        color: inherit;
      }
    }
    .img-category {
      position: absolute;
      right: 2rem;
      bottom: -6rem;
    }
  }
  .card-porfolio--0 {
    background-color: rgb(var(--gray-800));
    h4 {
      color: rgb(var(--pink-300));
    }
    .card-portfolio--actions {
      color: rgb(var(--mint-100));
    }
  }
  .card-porfolio--1 {
    background-color: rgb(var(--pink-300));
    h4 {
      color: rgb(var(--primary-300));
    }
  }
  @media screen and (min-width: 1121px) {
    .card-porfolio {
      flex: 0 0 50%;
    }
    .card-porfolio--0 {
      padding-left: calc((100vw - var(--max-width)) / 2 + 1rem);
    }
    .card-porfolio--1 {
      padding-left: 2rem;
      padding-right: calc((100vw - var(--max-width)) / 2 + 1rem);
    }
  }
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    .card-porfolio {
      flex: 0 0 100%;
      .card-portfolio--actions {
        padding-top: 2rem;
      }
    }
  }
  @media screen and (max-width: 520px) {
    .card-porfolio .img-category {
      max-width: 46%;
    }
  }
`;

const CasesPortfolio = ({ slice }) => {
  // console.log(slice);
  return (
    <CasesPortfolioWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice?.items?.map((item, i) => (
        <div
          className={`card-porfolio card-porfolio--${i} card-porfolio--${item.categoria.uid}`}
          key={`cardFeatures${item.categoria.uid}`}
        >
          <div className="card-porfolio--inner">
            <h4>{item.categoria.data.subtitulo}</h4>
            <PrismicRichText field={item.categoria.data.titulo} />

            <div className="card-portfolio--actions">
              <PrismicRichText field={item.categoria.data.conteudo} />
              <PrismicNextLink field={item.categoria.url}>
                <ButtonWaterColor text="Saiba mais" variation="white" />
              </PrismicNextLink>
            </div>
            <PrismicNextImage
              field={item.categoria.data.imagem_destacada}
              imgixParams={{ q: 100 }}
              className="img-fluid img-category"
            />
          </div>
        </div>
      ))}
    </CasesPortfolioWrapper>
  );
};

export default CasesPortfolio;
