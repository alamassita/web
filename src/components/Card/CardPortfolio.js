import React from "react";

import Link from "next/link";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import styled from "styled-components";

const CardPortfolioWrapper = styled.div`
  a {
    border-radius: 2.625rem;
    background: rgb(var(--gray-100));
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
    h3 {
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
    .img-fluid {
      border-radius: 14.375rem 14.375rem 0.5rem 0.5rem;
      transition: 300ms border-radius ease-in-out;
    }
  }
`;

const CardPortfolio = ({ url, image, title }) => {
  console.log("image", image);
  return (
    <CardPortfolioWrapper>
      <Link href={`/portfolio/${url}`}>
        <PrismicNextImage
          field={image}
          imgixParams={{ q: 100, fit: "crop&w=415&h=470" }}
          className="img-fluid img-category"
        />
        <h3 className="text-center">{title[0].text}</h3>
      </Link>
    </CardPortfolioWrapper>
  );
};

export default CardPortfolio;
