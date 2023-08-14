/**
 * @typedef {import("@prismicio/client").Content.ListarAquarelasSlice} ListarAquarelasSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ListarAquarelasSlice>} ListarAquarelasProps
 * @param {ListarAquarelasProps}
 */

import { PrismicRichText } from "@prismicio/react";

import { CardAquarela } from "../../components/Card";

import styled from "styled-components";

const ListaArtesWrapper = styled.section`
  padding: clamp(3rem, 10vw, 6rem) 0;
  h3 {
    color: rgb(var(--gray-800));
    text-align: center;
    font-size: 3.875rem;
    font-size: clamp(2.5rem, 10vw, 3.875rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.03875rem;
  }
  .artes-wrapper {
    max-width: 720px;
    text-align: center;
    margin: 0 auto;
    padding-top: 1rem;
  }
  .grid-aquarelas {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
  }
  @media screen and (max-width: 1001px) {
    .grid-aquarelas {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 820px) {
    .grid-aquarelas {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
const ListarAquarelas = ({ slice }) => {
  console.log("Aquarelas", slice);
  return (
    <ListaArtesWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="page-wrapper">
        {slice.primary.titulo ? (
          <PrismicRichText
            field={slice.primary.titulo}
            className="artes-title"
          />
        ) : (
          ""
        )}
        <div className="artes-wrapper">
          {slice.primary.conteudo ? (
            <PrismicRichText
              field={slice.primary.conteudo}
              className="artes-content"
            />
          ) : (
            ""
          )}
        </div>
        <div className="grid-aquarelas">
          {slice?.items?.map((item, i) => (
            <CardAquarela
              aquarela={item.aquarela}
              className={`id-${item.aquarela.id}`}
              key={`aquarelas-${slice.variation}-${item.aquarela.id}`}
            />
          ))}
        </div>
      </div>
    </ListaArtesWrapper>
  );
};

export default ListarAquarelas;
