/**
 * @typedef {import("@prismicio/client").Content.ListaTodosTrabalhosSlice} ListaTodosTrabalhosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ListaTodosTrabalhosSlice>} ListaTodosTrabalhosProps
 * @param {ListaTodosTrabalhosProps}
 */

import { CardPortfolio } from "../../components/Card";

const ListaTodosTrabalhos = ({ slice, context }) => {
  console.log("Todos os trabalhos: ", context);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
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
    </section>
  );
};

export default ListaTodosTrabalhos;
