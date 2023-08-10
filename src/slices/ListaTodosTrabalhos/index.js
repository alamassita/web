/**
 * @typedef {import("@prismicio/client").Content.ListaTodosTrabalhosSlice} ListaTodosTrabalhosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ListaTodosTrabalhosSlice>} ListaTodosTrabalhosProps
 * @param {ListaTodosTrabalhosProps}
 */

import { PrismicRichText } from "@prismicio/react";
import { CardPortfolio } from "../../components/Card";

import styled from "styled-components";

const ListaTodosTrabalhosWrapper = styled.section`
  .works-wrapper {
    padding-top: 6rem;
    padding-bottom: 1rem;
    h3 {
      color: rgb(var(--gray-800));
      text-align: center;
      font-size: 3.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.03875rem;
    }
  }
  .works-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.5rem;
    padding: 2rem 0 8rem 0;
  }
`;

const ListaTodosTrabalhos = ({ slice, context }) => {
  //console.log("Todos os trabalhos: ", context);
  return (
    <ListaTodosTrabalhosWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="page-wrapper">
        <div className="works-wrapper">
          {slice.primary.titulo ? (
            <PrismicRichText
              field={slice.primary.titulo}
              className="works-title"
            />
          ) : (
            ""
          )}
        </div>
        <div className="works-grid">
          {context.pagesInCategory?.map((item, i) =>
            item.id !== context.pageID ? (
              <CardPortfolio
                key={`item-${item.id}`}
                url={item.uid}
                title={item.data.titulo}
                image={item.data.imagem_destacada}
              />
            ) : null
          )}
        </div>
      </div>
    </ListaTodosTrabalhosWrapper>
  );
};

export default ListaTodosTrabalhos;
