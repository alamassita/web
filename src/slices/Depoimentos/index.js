/**
 * @typedef {import("@prismicio/client").Content.DepoimentosSlice} DepoimentosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DepoimentosSlice>} DepoimentosProps
 * @param {DepoimentosProps}
 */

import React, { useRef, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

import { ButtonWaterColor } from "../../components/Button";
import HeartBG from "../../../public/images/heartBG-001.svg";
import InkPhotoFrame from "../../../public/images/ink-photo-frame.png";
import InkTransitionSprite from "../../../public/images/ink-transition-sprite.png";
import TestimonialsImage from "../../../public/images/testimonials-images.png";

import { IconStar } from "../../components/Icons";
import { CardDepoimento } from "../../components/Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import { motion, useInView } from "framer-motion";

import styled from "styled-components";

const CtaSection = styled.div`
  background-color: rgb(var(--nudge));
  padding: 12rem 0;
  .testimonials-inner {
    display: flex;
  }
  .testimonials-image {
    padding: 0 2rem;
    width: 40%;
    align-self: center;
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  }
  .testimonials-content {
    width: 60%;
    background-image: url(${HeartBG.src});
    background-position: top 42px right -300px;
    background-repeat: no-repeat;
    padding: 0 2rem;
  }
  .testimonials-title h3 {
    margin-bottom: 6rem;
    padding-top: 7rem;
    color: rgb(var(--gray-800));
    font-family: Gallery Modern;
    font-size: 7rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.8em;
    letter-spacing: -0.14rem;
    text-align: right;
    b, strong {
      font-weight: 400;
      display: block;
      padding-right: 8rem;
    }
  }
  .testimonials-desc {
    max-width: 620px;
    p {
      color: rgb(var(--primary-200));
      font-family: var(--font-geomanist);
      font-size: 1rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.5em;
      margin-bottom: 1.5em;
    }
  }
  // Animation
  .c-transition {
    margin: rem(80) 0;
    overflow: hidden;
    position: relative;
    
    &::before {
      background-image: url(${InkPhotoFrame.src});
      background-size: 100% 100%;
      background-position: 50% 50%;
      content: '';
      height: 100%;
      position: absolute;
      width: 100%;
    }
    
    &::after {
      //animation: ink-transition 1.5s steps(39) 0.5s forwards;
      background-image: url(${InkTransitionSprite.src});
      background-size: 100% 100%;
      content: '';
      height: 100%;
      left: 50%;
      position: absolute;
      top: 0;
      transform: translateX(-1.25%);
      width: 4000%;
    }
    
    &.is-active::after {
      animation: ink-transition 1s steps(39) 0.3s forwards;
    }
    &.is-active .c-transition__img {
      opacity: 1;
    }
  }
  

  .c-transition__img {
    height: 100%;
    object-fit: cover;
    opacity: 0;
    width: 100%;
  }
  @keyframes ink-transition {
    0% {
      transform: translateX(-1.25%);
    }
  
    99% {
      transform: translateX(-98.75%);
      opacity: 1;
    }
  
    100% {
      transform: translateX(-98.75%);
      opacity: 0;
    }
  }
  @media screen and (min-width: 1420px) {
    .c-transition {
      margin-top: -10rem;
      margin-bottom: -10rem;
    }
    .testimonials-inner {
      justify-content: space-between;
    }
    .testimonials-image{
      width: 35%;
    }
    .testimonials-content {
        padding-right: calc((100vw - var(--max-width))/2 + 1rem);
        background-position: top 4rem right calc((100vw - var(--max-width))/2 - 320px);
    }
  }
  @media screen and (max-width: 1220px) {
    .testimonials-title h3 {
      padding-right: 6rem;
      b, strong {
        padding-right: 0;
      }
    }
  }
  @media screen and (max-width: 820px) {
    padding: 6rem 0;
    .testimonials-inner {
      flex-direction: column;
    }
    .testimonials-image {
      order: 2;
      margin-top: 3rem;
      margin-bottom: 0;
    }
    .testimonials-content {
      width: 100%;
    }
  }
}
`;

const DefaultSection = styled.div`
  .testimonials-top {
    background: rgba(var(--mint-200), 0.25);
    padding: 2rem 0;
    .testimonials-top--wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        margin: 0;
        color: rgb(var(--gray-800));
        font-size: 2.625rem;
        line-height: 1.2em;
        letter-spacing: -0.105rem;
      }
      .starts {
        color: rgb(var(--gray-500));
        font-family: var(--font-geomanist);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5em;
        display: flex;
        grid-gap: 1rem;
        align-items: center;
      }
      .icon-star {
        display: flex;
      }
    }
  }
  .testimonials-bottom {
    padding: 6rem 0;
    background: rgba(var(--mint-100, 0.5));
  }
  .swiper {
    --swiper-pagination-bullet-inactive-color: rgb(var(--mint-300));
    --swiper-pagination-color: rgb(var(--mint-300));
  }
  .swiper-pagination {
    position: relative;
  }
  @media screen and (max-width: 767px) {
    .starts img {
      display: none;
      visibility: hidden;
    }
    .icon-star svg {
      width: 16px;
    }
  }
`;

const Depoimentos = ({ slice }) => {
  const imageWaterColorRef = useRef(null);
  const isInView = useInView(imageWaterColorRef);

  useEffect(() => {
    if (slice.variation === "callToAction") {
      imageWaterColorRef.current.classList.toggle("is-active");
    }
  }, [isInView]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" ? (
        <DefaultSection>
          <div className="testimonials-top">
            <div className="page-wrapper">
              <div className="testimonials-top--wrapper">
                <PrismicRichText field={slice.primary.titulo} />
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
          </div>
          <div className="testimonials-bottom">
            <div className="page-wrapper">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                  1: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {slice?.items?.map((item, i) => (
                  <SwiperSlide>
                    <div
                      className={`card-depoimento card-depoimento--${i}`}
                      key={`test$imonial-${slice.variation}-${item.depoimento.id}`}
                    >
                      <CardDepoimento testimonial={item.depoimento} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </DefaultSection>
      ) : null}
      {slice.variation === "callToAction" ? (
        <CtaSection>
          <div className="testimonials-wrapper">
            <div className="testimonials-inner">
              <div className="testimonials-image">
                <motion.div
                  className="js-ink-trigger c-transition "
                  ref={imageWaterColorRef}
                >
                  <PrismicNextImage
                    field={slice.primary.imagem_destacada}
                    imgixParams={{ q: 100 }}
                    className="c-transition__img"
                  />
                </motion.div>
              </div>
              <div className="testimonials-content">
                <div className="testimonials-title">
                  <PrismicRichText field={slice.primary.titulo} />
                </div>
                <div className="testimonials-desc">
                  <PrismicRichText field={slice.primary.conteudo} />
                  <PrismicNextLink field={slice.primary.url}>
                    <ButtonWaterColor
                      text="Ver depoimentos"
                      variation="primary"
                    />
                  </PrismicNextLink>
                </div>
              </div>
            </div>
          </div>
        </CtaSection>
      ) : (
        ""
      )}
    </section>
  );
};

export default Depoimentos;
