/**
 * @typedef {import("@prismicio/client").Content.IntroHomeSlice} IntroHomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IntroHomeSlice>} IntroHomeProps
 * @param {IntroHomeProps}
 */

import { useRef, useState, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import { ButtonWaterColor } from "../../components/Button";

import styled from "styled-components";

const IntroHomeWrapper = styled.div`
  padding: 12rem 0;
  .intro-inner {
    display: flex;
    grid-gap: 2rem;
  }
  .intro-image {
    position: relative;
    z-index: 2;
    margin-top: -18rem;
    padding: 0 2rem;
    width: 40%;
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: auto;
    }
  }
  .intro-content {
    width: 60%;
    display: flex;
    justify-content: end;
    h3 {
      color: rgb(var(--gray-800));
      font-family: var(--font-gallery);
      font-size: 3.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.03875rem;
      margin-bottom: 2rem;
    }
    p {
      color: rgb(var(--primary-200));
      font-family: var(--font-geomanist);
      font-size: 1rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.5em;
      margin-bottom: 1.5rem;
    }
  }
  .intro-content--inner {
    max-width: 620px;
  }
  .intro-content {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media screen and (min-width: 1420px) {
    .intro-content {
      padding-right: calc((100vw - var(--max-width)) / 2 + 1rem);
    }
  }
  @media screen and (max-width: 1001px) {
    .intro-inner {
      flex-direction: column;
    }
    .intro-content {
      width: 100%;
      justify-content: flex-start;
    }
    .intro-image {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2rem;
      width: 60%;
    }
  }
`;
const IntroHome = ({ slice }) => {
  let imageRef = useRef(null);
  const [windowSize, setWindowSize] = useState(0);
  let y;
  let { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  y = useTransform(scrollYProgress, [0, 1], ["40%", "-20%"]);

  return (
    <IntroHomeWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={imageRef}
    >
      <div className="intro-wrapper">
        <div className="intro-inner">
          <motion.div style={{ y }} className="intro-image">
            <PrismicNextImage
              field={slice.primary.imagem_destacada}
              imgixParams={{ q: 100 }}
            />
          </motion.div>
          <div className="intro-content">
            <div className="intro-content--inner">
              <PrismicRichText field={slice.primary.titulo} />
              <PrismicRichText field={slice.primary.conteudo} />
              <Link href={`/portfolio`}>
                <ButtonWaterColor text="Ver portfólio" variation="primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IntroHomeWrapper>
  );
};

export default IntroHome;
