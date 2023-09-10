/**
 * @typedef {import("@prismicio/client").Content.OurMottoSlice} OurMottoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurMottoSlice>} OurMottoProps
 * @param {OurMottoProps}
 */

import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { AnimateText } from "@/components/AnimateText";

import styled from "styled-components";

const OurMottWrapper = styled.section`
  padding-bottom: 8rem;
  background: linear-gradient(
    0deg,
    rgb(var(--nudge)) 0%,
    rgb(var(--nudge)) 77%,
    rgba(255, 255, 255, 1) 77%
  );
  .motto-video {
    video {
      max-width: 390px;
      width: 100%;
      margin: auto;
      display: block;
      height: auto;
      border-radius: 40px;
    }
  }
  .motto-blockquote {
    text-align: center;
    margin: auto;
    display: block;
    padding: 8rem 0;
    max-width: 840px;
    h4 {
      color: rgb(var(--gray-600));
      font-family: var(--font-geomanist);
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5em;
      letter-spacing: 0.06rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }
    h3 {
      color: rgb(var(--primary-300));
      font-size: 5.125rem;
      font-size: clamp(3.5rem, 10vw, 5.125rem);
      font-style: normal;
      font-weight: 400;
      line-height: 1em;
      letter-spacing: -0.1025rem;
      margin-bottom: 2rem;
    }
    h5 {
      color: rgb(var(--mint-200));
      text-align: center;
      font-family: var(--font-geomanist);
      font-size: 2rem;
      font-size: clamp(1.5rem, 5vw, 2rem);
      font-style: normal;
      font-weight: 300;
      line-height: 1.5em;
      letter-spacing: -0.04rem;
    }
  }
`;

const OurMotto = ({ slice }) => {
  return (
    <OurMottWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="page-wrapper">
        <div className="motto-video">
          <video autoPlay={true} playsInline={true} loop={true} muted={true}>
            <source src={slice.primary.video.url} type="video/mp4" />
          </video>
        </div>
        <div className="motto-blockquote">
          <h4>Our motto</h4>
          <PrismicRichText field={slice.primary.citacao} />
          <PrismicRichText field={slice.primary.autor} />
        </div>
      </div>
    </OurMottWrapper>
  );
};

export default OurMotto;
