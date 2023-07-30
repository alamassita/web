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
  background-color: rgb(var(--nudge));
  .page-wrapper {
    padding-top: 8rem;
    padding-bottom: 8rem;
    background-image: url(${ContatoBG.src});
    background-repeat: no-repeat;
    background-positon: left top;
  }
  .form--inner {
    display: flex;
    grid-gap: 2rem;
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
    >
      <div className="page-wrapper">
        <div className="form--inner">
          <div className="form--content">
            <PrismicRichText field={slice.primary.subtitulo} />
            <PrismicRichText field={slice.primary.titulo} />
            <div className="form--content__desc">
              <PrismicRichText field={slice.primary.conteudo} />
            </div>
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
