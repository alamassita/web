import React from "react";
import Image from "next/image";

import WaterColorImage from "../../../public/images/waterColorBG.png";
import WaterColorArrowImage from "../../../public/images/waterColorArrow.png";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  color: rgb(var(--pink-300));
  font-size: 1rem;
  font-family: var(--font-geomanist);
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
  position: relative;
  display: inline-block;
  padding: 1rem 2rem 1rem 0;
  transition: 200ms color ease-in-out;
  &:before {
    content: "";
    width: 127px;
    width: 100%;
    height: 37px;
    top: 50%;
    left: 1rem;
    transform: translate3d(0, -50%, 0);
    background-image: url(${WaterColorImage.src});
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 100% 37px;
    position: absolute;
    opacity: 0.5;
    transition: 200ms opacity ease-in-out;
  }
  &:after {
    content: "";
    width: 24px;
    height: 16px;
    position: absolute;
    background-image: url(${WaterColorArrowImage.src});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(0.8);
    mix-blend-mode: multiply;
    opacity: 0;
    top: 50%;
    right: 1.5rem;
    transform: translate3d(0, -50%, 0);
    transition: 200ms opacity ease-in-out, 200ms right ease-in-out;
  }
  span {
    position: relative;
    z-index: 2;
    display: inline-block;
    padding-right: 1rem;
  }
  &:hover {
    color: rgb(var(--teal));
    &:before {
      opacity: 0.3;
    }
    &:after {
      opacity: 1;
      right: 0.5rem;
    }
  }
  &.primary {
    &:before {
      filter: grayscale(0.7);
    }
  }
  &.white {
    color: rgb(var(--nudge));
    &:before {
      filter: grayscale(0.7);
      opacity: 0.1;
    }
    &:after {
      mix-blend-mode: overlay;
    }
  }
`;

const ButtonWaterColor = ({ text, variation }) => {
  return (
    <ButtonWrapper className={variation}>
      <span>{text}</span>
    </ButtonWrapper>
  );
};

export default ButtonWaterColor;
