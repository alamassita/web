import React from "react";
import Image from "next/image";

import TestimonialsImage from "../../../public/images/testimonials-images.png";
import { IconStar } from "../Icons";

import styled from "styled-components";

const TestimonialsRateWrapper = styled.div`
  --hTestimonials: 82px;
  height: var(--hTestimonials);
  background-color: rgba(var(--mint-200), 0.25);
  margin-top: -82px;
  position: relative;
  .testimonials-top--wrapper {
    display: flex;
    justify-content: center;
    height: var(--hTestimonials);
  }
  .starts {
    display: flex;
    align-items: center;
    grid-gap: 16px;
    color: rgb(var(--gray-500));
    font-family: var(--font-geomanist);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5em;
  }
`;

const TestimonialsRate = () => {
  return (
    <TestimonialsRateWrapper>
      <div className="page-wrapper">
        <div className="testimonials-top--wrapper">
          <div className="starts">
            Excelente
            <div className="icon-star">
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
            <Image
              src={TestimonialsImage.src}
              alt="Depoimentos"
              width={180}
              height={52}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </TestimonialsRateWrapper>
  );
};

export default TestimonialsRate;
