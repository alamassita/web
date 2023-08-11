/**
 * @typedef {import("@prismicio/client").Content.OQueEstaInclusoSlice} OQueEstaInclusoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OQueEstaInclusoSlice>} OQueEstaInclusoProps
 * @param {OQueEstaInclusoProps}
 */

import styled from "styled-components";

const ContentInclusoWrapper = styled.section`
  background-color: rgb(var(--nudge));
  padding: 8rem 0;
  h3 {
    color: rgb(var(--gray-800));
    font-size: 3.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.03875rem;
    text-align: center;
    margin-bottom: 4rem;
  }
  .page-content {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(4, 1fr);
    counter-reset: section;
  }
  .item {
    position: relative;
    isolation: isolate;
    &:before {
      position: absolute;
      left: -2rem;
      top: -3.5rem;
      counter-increment: section;
      content: "0" counter(section);
      color: rgb(var(--gray-200));
      font-family: var(--font-gallery);
      font-size: 7.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      z-index: -1;
    }
    h4 {
      color: rgb(var(--teal));
      font-family: var(--font-gallery);
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.015rem;
      margin-bottom: 2rem;
    }
    p {
      color: rgb(var(--primary-200));
    }
  }
  @media screen and (max-width: 1180px) {
    .page-content {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 920px) {
    .page-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 720px) {
    .page-content {
      grid-template-columns: 1fr;
    }
  }
`;

const OQueEstaIncluso = ({ slice }) => {
  return (
    <ContentInclusoWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="page-wrapper">
        <div className="page-inner">
          <h3>O que esta incluso?</h3>
        </div>
        {slice.variation === "signature" ? (
          <div className="page-content page-content--signature">
            <div className="item">
              <h4>Aquarela</h4>
              <p>
                Arte exclusiva pintada à mão. Vocês podem escolher o tema de sua
                preferência (local do casamento, flores que serão usadas na
                decoração, paisagens,etc.)
              </p>
            </div>
            <div className="item">
              <h4>Tamanhos & formatos</h4>
              <p>
                Vocês terão a flexibilidade de escolher entre todos os tipos de
                papéis com os quais trabalhamos, escolhendo as fontes e layout
                junto ao nosso time de designers.
              </p>
            </div>
            <div className="item">
              <h4>Monograma</h4>
              <p>
                Na experiência signature vocês também contam com a criação de
                monograma virtual (caso desejem monograma em aquarela, temos
                preços especiais sob consulta)
              </p>
            </div>
            <div className="item">
              <h4>Cartela de cores</h4>
              <p>
                A cartela de cores é um item de grande importância dado que
                todos os profissionais do seu casamento irão utilizá-la. Caso
                você já tenha uma desenvolvida, nos envie, caso contrário,
                podemos criar uma do zero.
              </p>
            </div>
            <div className="item">
              <h4>Quantidade mínima</h4>
              <p>
                Para clientes signature não exigimos quantidade mínima para
                nenhum item do nosso portifólio.
              </p>
            </div>
            <div className="item">
              <h4>Amostra física</h4>
              <p>
                Além da tradicional aprovação virtual, vocês terão a
                oportunidade de aprovar os convites com foto e amostra física.
                (Para os demais itens, a aprovação será somente virtual)
              </p>
            </div>
            <div className="item">
              <h4>WhatsApp</h4>
              <p>
                Atendimento preferencial por whatsapp. Em caso de urgência,
                pedimos um prazo de 24hrs para retorno, mesmo aos finais de
                semana
              </p>
            </div>
            <div className="item">
              <h4>Alterações</h4>
              <p>
                Vocês tem direito a até 5 alterações. Por isso, nossa dica é:
                solicitem todas as alterações necessárias identificadas nas
                revisões de uma única vez.
              </p>
            </div>
          </div>
        ) : (
          <div className="page-content">
            <div className="item">
              <h4>Arte do acervo</h4>
              <p>
                Na ALM, quem escolhe a arte são vocês, não importa se está em um
                modelo diferente de convite, tudo pode ser adaptado. Confira
                nosso acervo de artes disponíveis!
              </p>
            </div>
            <div className="item">
              <h4>Tamanhos & formatos</h4>
              <p>
                Vocês terão a flexibilidade de escolher entre todos os tipos de
                papéis com os quais trabalhamos, escolhendo as fontes e layout
                junto ao nosso time de designers.
              </p>
            </div>
            <div className="item">
              <h4>Monograma</h4>
              <p>
                Na experiência prêt - à - porter vocês também contam com nosso
                catálogo de monogramas. Caso queiram algo exclusivo, é possível
                incluir esse serviço a parte com custo especial para o pacote.
              </p>
            </div>
            <div className="item">
              <h4>Cartela de cores</h4>
              <p>
                A cartela de cores é um item de grande importância dado que
                todos os profissionais do seu casamento irão utilizá-la. Caso
                você já tenha uma desenvolvida, nos envie, caso contrário,
                podemos criar uma do zero (custo adicional)
              </p>
            </div>
            <div className="item">
              <h4>Quantidade mínima</h4>
              <p>
                Para clientes prêt - à - porter alguns itens poderão ter
                quantidade mínima necessária. Consulte-nos
              </p>
            </div>
            <div className="item">
              <h4>Amostra grátis</h4>
              <p>
                Na ALM, as aprovações são feitas através de foto, para que
                possam conferir se tudo está do jeitinho que desejavam!
              </p>
            </div>
            <div className="item">
              <h4>WhatsApp</h4>
              <p>
                Atendimento por whatsapp será realizado exclusivamente para
                trocas rápidas. Todas as solicitações (pedidos, alterações,
                inclusões, etc.) deverão ser enviadas e formalizadas por e-mail.
              </p>
            </div>
            <div className="item">
              <h4>Alterações</h4>
              <p>
                Vocês tem direito a até 3 alterações. Por isso, nossa dica é:
                solicitem todas as alterações necessárias identificadas nas
                revisões de uma única vez.
              </p>
            </div>
          </div>
        )}
      </div>
    </ContentInclusoWrapper>
  );
};

export default OQueEstaIncluso;
