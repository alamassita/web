import React from "react";
import Image from "next/image";

import WaterColorArrowImage from "../../../public/images/waterColorArrow.png";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  color: rgb(var(--nudge));
  background-color: rgb(var(--mint-300));
  font-size: 1rem;
  font-family: var(--font-geomanist);
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
  position: relative;
  display: flex;
  padding: 1rem 2rem;
  border-radius: 6px;
  transition: 200ms color ease-in-out, 200ms background-color ease-in-out;
  span {
    position: relative;
    display: inline-block;
    padding-right: 1rem;
  }
  em {
    filter: grayscale(1);
  }
  &:hover {
    background-color: rgb(var(--gray-800));
  }
  &.primary {
  }
`;

const Button = ({ text, variation }) => {
  return (
    <ButtonWrapper className={variation}>
      <span>{text}</span>
      <em>
        <Image
          src={WaterColorArrowImage.src}
          alt={`Send me a message`}
          width={24}
          height={16}
          quality="100"
          className="img-fluid"
        />
      </em>
    </ButtonWrapper>
  );
};

export default Button;
