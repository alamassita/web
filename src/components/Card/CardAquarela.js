import React from "react";
import styled from "styled-components";

import { PrismicNextImage } from "@prismicio/next";

const Card = styled.div`
  border-radius: 2.625rem;
  background: transparent;
  border: 1px solid rgb(var(--gray-200));
  display: block;
  padding: 1rem 4px;
  transition: 300ms border-radius ease-in-out,
    300ms background-color ease-in-out;

  &:hover {
    border-radius: 0.5rem;
    h3 {
      color: rgb(var(--teal));
    }
    .img-fluid {
      border-radius: 0.5rem;
    }
  }
  .img-fluid {
    display: block;
    margin: 0 auto;
    border-radius: 14.375rem 14.375rem 0.5rem 0.5rem;
    transition: 300ms border-radius ease-in-out;
  }
  .card-image {
    position: relative;
    .aquarela-number {
      position: absolute;
      top: -0.25rem;
      right: 0.5rem;
      background-color: rgb(var(--gray-100));
      color: rgb(var(--gray-500));
      font-size: 14px;
      font-weight: 500;
      padding: 0.2rem 0.4rem;
      border-radius: 2px;
      font-family: var(--font-geomanist);
    }
  }
  &.card-aquarela h4 {
    color: rgb(var(--mint-300));
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.015rem;
    padding: 1rem 1rem 0 1rem;
    margin: 0;
    transition: 300ms color ease-in-out;
  }
`;

const CardAquarela = ({ aquarela, className }) => {
  //console.log("Inside card: ", testimonial);
  return (
    <Card className={`card-aquarela ${className ? className : "card-default"}`}>
      <div className="card-header">
        <div className="card-image">
          <PrismicNextImage
            field={aquarela.data?.imagem_destacada}
            imgixParams={{ q: 100 }}
            className="img-fluid"
          />
          {aquarela.data?.numero_de_referencia ? (
            <span className="aquarela-number">
              n{aquarela.data?.numero_de_referencia}
            </span>
          ) : null}
        </div>
        <div className="card-title">
          <h4 className="text-center">{aquarela.data?.titulo[0].text}</h4>
        </div>
      </div>
      {/* <div className="card-body">
        <div className="card-content">
          <PrismicRichText field={aquarela.data?.conteudo} />
        </div>
      </div> */}
    </Card>
  );
};

export default CardAquarela;
