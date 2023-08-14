/**
 * @typedef {import("@prismicio/client").Content.DetalhesProdutoSlice} DetalhesProdutoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DetalhesProdutoSlice>} DetalhesProdutoProps
 * @param {DetalhesProdutoProps}
 */
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { IconPaper, IconEnvelope, IconFecho } from "../../components/Icons";

import styled from "styled-components";

const DetailsSection = styled.section`
  padding: 2rem 0;
  .product-image {
    margin-top: -8rem;
    position: relative;
    z-index: 2;
    img {
      margin: auto;
      display: block;
    }
  }
  .product-content {
    display: flex;
    grid-gap: 2rem;
    padding: 2rem 0;
    max-width: 920px;
    margin: auto;
  }
  .product-item {
    flex: 1;
    text-align: center;
    p {
      color: rgb(var(--gray-600));
    }
  }
  .product-icon {
    display; block;
    margin: 2rem auto;
    color: rgb(var(--gray-300));
  }
  @media screen and (max-width: 1001px) {
    .product-image {
      margin-top: -6.5rem;
    }
  }
`;

const DetalhesProduto = ({ slice }) => {
  return (
    <DetailsSection
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="page-wrapper">
        <div className="product-inner">
          {slice.primary.imagem_destacada && (
            <div className="product-image">
              <PrismicNextImage
                field={slice.primary.imagem_destacada}
                className="img-fluid"
              />
            </div>
          )}
          <div className="product-content">
            {slice.primary.envelope && (
              <div className="product-item">
                <div className="product-icon">
                  <IconEnvelope />
                </div>
                <PrismicRichText field={slice.primary.envelope} />
              </div>
            )}
            {slice.primary.papel && (
              <div className="product-item">
                <div className="product-icon">
                  <IconPaper />
                </div>
                <PrismicRichText field={slice.primary.papel} />
              </div>
            )}
            {slice.primary.fecho && (
              <div className="product-item">
                <div className="product-icon">
                  <IconFecho />
                </div>
                <PrismicRichText field={slice.primary.fecho} />
              </div>
            )}
          </div>
        </div>
      </div>
    </DetailsSection>
  );
};

export default DetalhesProduto;
