/**
 * @typedef {import("@prismicio/client").Content.FormularioSlice} FormularioSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FormularioSlice>} FormularioProps
 * @param {FormularioProps}
 */

import { PrismicRichText } from "@prismicio/react";
import { FormGeneral } from "../../components/Form";
import ContatoBG from "../../../public/images/bg-contato.jpg";
import styled from "styled-components";

const FormularioWrapper = styled.section`
  &.default {
    background-color: rgb(var(--nudge));
    .page-wrapper {
      background-image: url(${ContatoBG.src});
      background-repeat: no-repeat;
      background-positon: left top;
    }
    h4 {
      color: rgb(var(--pink-300));
      font-family: var(--font-geomanist);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.5em;
      letter-spacing: 0.3375rem;
      text-transform: uppercase;
    }
    h3 {
      color: rgb(var(--gray-800));
      font-size: 5.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1em;
      letter-spacing: -0.1025rem;
      margin: 2rem 0;
    }
  }
  &.orcamento {
    h3 {
      color: rgb(var(--gray-800));
      font-family: var(--font-gallery);
      font-size: 3.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.03875rem;
      margin-bottom: 1.5rem;
    }
    h4 {
      color: rgb(var(--primary-300));
      font-family: var(--font-gallery);
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5em;
    }
  }
  .page-wrapper {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  .form--inner {
    display: flex;
    grid-gap: 2rem;
  }

  p {
    color: rgb(var(--gray-600));
    font-family: var(--font-geomanist);
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.5em;
  }
  .form--content__desc {
    max-width: 430px;
  }
  .form-area {
    width: 100%;
  }
  @media screen and (min-width: 999px) {
    .form--content {
      flex: 0 0 50%;
    }
  }
  @media screen and (max-width: 998px) {
    .form--inner {
      flex-direction: column;
    }
    .form--content {
      flex: 0 0 100%;
    }
  }
`;

const Formulario = ({ slice }) => {
  return (
    <FormularioWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.variation}
    >
      <div className="page-wrapper">
        <div className="form--inner">
          <div className="form--content">
            {slice.variation === "default" ? (
              <>
                <PrismicRichText field={slice.primary.subtitulo} />
                <PrismicRichText field={slice.primary.titulo} />
              </>
            ) : (
              <>
                <PrismicRichText field={slice.primary.titulo} />
                <PrismicRichText field={slice.primary.subtitulo} />
              </>
            )}
            {slice.primary.conteudo ? (
              <div className="form--content__desc">
                <PrismicRichText field={slice.primary.conteudo} />
              </div>
            ) : null}
          </div>
          <div className="form-area">
            <FormGeneral />
          </div>
        </div>
      </div>
    </FormularioWrapper>
  );
};

export default Formulario;
