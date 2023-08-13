/**
 * @typedef {import("@prismicio/client").Content.GaleriaSlice} GaleriaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GaleriaSlice>} GaleriaProps
 * @param {GaleriaProps}
 */

import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "../../components/Lightbox/NextJsImage";
import NextJsImageAlbum from "../../components/PhotoAlbum/NextJsImageAlbum";

import { PrismicRichText } from "@prismicio/react";

import styled from "styled-components";
const GalleryWrapper = styled.section`
  padding-top: 6rem;
  padding-bottom: 6rem;
  h3 {
    text-align: center;
    font-size: 3.875rem;
  }
  section-title {
    margin: 2rem auto;
    margin-top: 0;
    text-align: center;
  }
  .max-width {
    margin: 2rem auto;
    margin-top: 0;
    padding-bottom: 1rem;
    max-width: 720px;
    text-align: center;
    p {
      font-size: 1.125rem;
    }
  }
  .gallery-wrapper {
    .react-photo-album--column > div {
      position: relative;
      overflow: hidden;
      transition: 300ms opacity ease-in-out, 600ms border-radius ease-in-out,
        300ms transform ease-in-out;
      transform-origin: center;
      &:hover {
        opacity: 0.5;
        border-radius: 8px;
        transform: scale(0.9) rotate(-3deg);
      }
    }
  }
`;

const Galeria = ({ slice }) => {
  const [index, setIndex] = useState(-1);
  //console.log("Galeria: ", slice);
  const allImages = slice.items.map((item) => {
    return item.imagem.url;
  });
  const photos = slice.items.map((item) => {
    return {
      src: `${item.imagem.url}&crop&w=470&h=470`,
      width: item.imagem.dimensions.width,
      height: item.imagem.dimensions.height,
      alt: item.imagem.alt,
    };
  });
  //console.log("Images: ", allImages);
  //console.log("Images slice: ", slice.items);

  return (
    <GalleryWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="page-wrapper">
        {slice.primary.titulo ? (
          <div className="section-title">
            <PrismicRichText field={slice.primary.titulo} />
          </div>
        ) : (
          ""
        )}
        {slice.primary.conteudo ? (
          <div className="max-width">
            <PrismicRichText field={slice.primary.conteudo} />
          </div>
        ) : (
          ""
        )}
        <div className="gallery-wrapper">
          <PhotoAlbum
            layout={slice.primary.galeria_layout}
            photos={photos}
            targetRowHeight={150}
            renderPhoto={NextJsImageAlbum}
            onClick={({ index: current }) => setIndex(current)}
          />
        </div>
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={photos}
          render={{ slide: NextJsImage }}
        />
      </div>
    </GalleryWrapper>
  );
};

export default Galeria;
