import React from "react";
import styled from "styled-components";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { IconStar } from "../Icons";

const Card = styled.div`
  padding: 2px;
  .card-header {
    display: flex;
    grid-gap: 16px;
    align-items: center;
    margin-bottom: 1.5rem;
    .card-image {
      flex: 0 0 52px;
      border-radius: 50%;
      overflow: hidden;
      aspect-ratio: 1;
      border: 2px solid rgb(var(--mint-300));
      img {
        object-fit: cover;
      }
    }
    .icon-star {
      display: flex;
      height: 16px;
      align-items: center;
    }
    .icon-star svg {
      width: 16px;
    }
    .card-title {
      display: flex;
      flex-direction: column;
    }
    .card-title p {
      color: rgb(var(--primary-300));
      font-family: var(--font-gallery);
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.2em;
      margin: 0;
    }
  }
  .card-quote {
    position: relative;
    isolation: isolate;
    p {
      color: rgb(var(--gray-500));
      font-family: var(--font-geomanist);
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5em;
    }

    &:before {
      position: absolute;
      content: open-quote;
      z-index: -1;
      color: rgba(var(--mint-200), 0.2);
      font-family: var(--font-geomanist);
      font-size: 15.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1;
      top: -4rem;
      left: -1rem;
    }
    &:after {
      content: close-quote;
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
  }
  .card-content {
    p {
      color: rgb(var(--gray-500));
    }
  }
`;

const CardDepoimento = ({ testimonial }) => {
  // console.log(testimonial);
  return (
    <Card>
      <div className="card-header">
        <div className="card-image">
          <PrismicNextImage
            field={testimonial.data?.foto}
            imgixParams={{ q: 100 }}
            className="img-fluid"
          />
        </div>
        <div className="card-title">
          <PrismicRichText field={testimonial.data?.nome} />
          <div className="icon-star">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-quote">
          <PrismicRichText field={testimonial.data?.citacao} />
        </div>
        <div className="card-content">
          <PrismicRichText field={testimonial.data?.conteudo} />
        </div>
      </div>
    </Card>
  );
};

export default CardDepoimento;
