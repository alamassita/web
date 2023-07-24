/**
 * @typedef {import("@prismicio/client").Content.WhatsAppSlice} WhatsAppSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhatsAppSlice>} WhatsAppProps
 * @param {WhatsAppProps}
 */

import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import Link from "next/link";

import { StampEstamosOnline } from "../../components/Stamps";
import { IconWhatsApp } from "../../components/Icons";
import { ButtonWaterColor } from "../../components/Button";

import whatsBG from "../../../public/images/bgWhatsAppImage.jpg";

import styled from "styled-components";

const WhatsAppWrapper = styled.section`
  .whatsApp-wrapper {
    padding: 12rem 0;
    --padding-left: 6rem;
    background-image: url(${whatsBG.src});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 890px auto;
  }
  .whatsApp-inner {
    display: flex;
    align-items: center;
    grid-gap: 3rem;
  }
  .whatsApp-content,
  .whatsApp-image {
    flex: 1;
  }
  .whatsApp-content {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 41.125rem;
      height: 12.25rem;
      top: -37px;
      right: -200px;
      border-radius: 14.75rem;
      background: rgba(182, 201, 179, 0.25);
      backdrop-filter: blur(8px);
      z-index: 1;
    }
  }
  .whatsApp-content h3 {
    color: rgb(var(--gray-800));
    font-family: var(--font-gallery);
    font-size: 3.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1em;
    margin-bottom: 4rem;
    position: relative;
    z-index: 2;
    em {
      font-weight: 400;
      font-style: normal;
      position: relative;
      &:after {
        content: "";
        width: 12px;
        height: 12px;
        background-color: #23968b;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        right: -24px;
        animation: online 600ms infinite alternate;
      }
    }
    strong,
    b {
      font-weight: 400;
      padding-left: var(--padding-left);
      display: block;
    }
  }
  .whatsApp-content--desc {
    color: rgb(var(--primary-200));
    font-family: var(--font-geomanist);
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.5em;
    padding-left: var(--padding-left);
    p {
      margin-bottom: 1.5rem;
    }
  }
  @keyframes online {
    to {
      opacity: 0.2;
    }
  }
  .whatsApp-image--wrapper {
    position: relative;
    width: 344px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .whatsAnimateButton {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translate3d(-50%, 0, 0) scale(1);
    transform-origin: center center;
    transition: 300ms transform cubic-bezier(0.68, -0.6, 0.32, 1.6);
    &:hover {
      transform: translate3d(-50%, 0, 0) scale(1.2);
    }
  }
  .whatsAnimateButton--inner {
    position: relative;
  }
  .whatsAnimateButton--animate {
    animation: rotate-anima 10s linear infinite;
    transform-origin: center center;
  }
  @keyframes rotate-anima {
    from {
      transform: rotate(-360deg);
    }
  }
  .whatsAnimateButton--icon {
    width: 52px;
    height: 52px;
    border-radius: 52px;
    color: rgb(var(--nudge));
    background-color: #57d36b;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    margin-top: -3px;
  }
`;

const WhatsApp = ({ slice }) => {
  return (
    <WhatsAppWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div class="whatsApp-wrapper page-wrapper">
        <div class="whatsApp-inner">
          <div class="whatsApp-content">
            <PrismicRichText field={slice.primary.titulo} />
            <div class="whatsApp-content--desc">
              <PrismicRichText field={slice.primary.conteudo} />
              <Link href={slice.primary.url_whatsapp} target="_blank">
                <ButtonWaterColor text="Enviar mensagem" variation="primary" />
              </Link>
            </div>
          </div>
          <div class="whatsApp-image">
            <div class="whatsApp-image--wrapper">
              <Link
                className="whatsAnimateButton"
                href={slice.primary.url_whatsapp}
                target="_blank"
              >
                <div className="whatsAnimateButton--inner">
                  <StampEstamosOnline className="whatsAnimateButton--animate" />
                  <div className="whatsAnimateButton--icon">
                    <IconWhatsApp />
                  </div>
                </div>
              </Link>

              <PrismicNextImage
                field={slice.primary.imagem_destacada}
                imgixParams={{ q: 100 }}
              />
            </div>
          </div>
        </div>
      </div>
    </WhatsAppWrapper>
  );
};

export default WhatsApp;
