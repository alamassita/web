import React from "react";

import Link from "next/link";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const CardPortfolio = ({ url, image, title }) => {
  console.log("image", image);
  return (
    <div>
      <Link href={`/portfolio/${url}`}>
        <PrismicNextImage
          field={image}
          imgixParams={{ q: 100 }}
          className="img-fluid img-category"
        />
        <h3 className="text-center">{title[0].text}</h3>
      </Link>
    </div>
  );
};

export default CardPortfolio;
