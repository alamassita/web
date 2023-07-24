import localFont from "next/font/local";

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const geomanist = localFont({
  src: [
    {
      path: "../../public/fonts/geomanist/geomanist-light-webfont.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/geomanist/geomanist-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/geomanist/geomanist-medium-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/geomanist/geomanist-medium-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geomanist",
});
const gallery = localFont({
  src: [
    {
      path: "../../public/fonts/gallery/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gallery/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gallery",
});

export { geomanist, gallery };
