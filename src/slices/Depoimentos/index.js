/**
 * @typedef {import("@prismicio/client").Content.DepoimentosSlice} DepoimentosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DepoimentosSlice>} DepoimentosProps
 * @param {DepoimentosProps}
 */

import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { ButtonWaterColor } from "../../components/Button";
import HeartBG from "../../../public/images/heartBG-001.svg";

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
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  }
  .testimonials-content {
    width: 60%;
    background-image: url(${HeartBG.src});
    background-position: top right -320px;
    background-repeat: no-repeat;
  }
  .testimonials-title h3 {
    
  }
  .testimonials-title h3 p{
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
  @media screen and (min-width: 1420px) {
    
    .testimonials-content {
        padding-right: calc((100vw - var(--max-width))/2 + 1rem);
        background-position: top 4rem right calc((100vw - var(--max-width))/2 - 320px);
    }
  }
}
`;

const Depoimentos = ({ slice }) => {
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
                <PrismicNextImage
                  field={slice.primary.imagem_destacada}
                  imgixParams={{ q: 100 }}
                />
              </div>
              <div className="testimonials-content">
                <div className="testimonials-title">
                  <h3>
                    <PrismicRichText field={slice.primary.titulo} />
                  </h3>
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
