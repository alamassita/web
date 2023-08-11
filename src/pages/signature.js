import React, { useEffect, useState } from "react";
import Head from "next/head";
import * as prismic from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import sm from "../sm.json";

import { HeroCategory } from "../components/Hero";

export default function Signature({ page }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (page?.data) {
      console.log("Page, :", page);
      setLoading(false);
    }
  }, [page]);

  if (loading) return <div className="loading"></div>;
  return (
    <>
      <Head>
        <title>{page.data?.meta_title}</title>
        {isFilled.keyText(page.data?.meta_description) ? (
          <meta name="description" content={page.data?.meta_description} />
        ) : null}
      </Head>
      <HeroCategory
        title={page.data?.titulo}
        content={page.data?.descricao}
        image={page.data?.imagem_background}
        categoriaURI={page?.uid}
      />
      <SliceZone slices={page.data?.slices} components={components} />
    </>
  );
}

export async function getStaticProps() {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = prismic.createClient(sm.apiEndpoint);

  const page = await client.getByUID("portfolio_categoria", "signature", {
    fetchLinks: [
      "portfolio_categoria.uid",
      "portfolio_categoria.titulo",
      "portfolio_categoria.conteudo",
      "portfolio_categoria.subtitulo",
      "portfolio_categoria.imagem_destacada",
      "portfolio_categoria.url",
      "depoimento.nome",
      "depoimento.foto",
      "depoimento.conteudo",
      "depoimento.citacao",
    ],
  });

  //   const categoryID = page.id;
  //   // Use the category ID to filter for posts with that category
  //   const pagesInCategory = await client.getAllByType("portfolio", {
  //     filters: [prismic.filter.at("my.portfolio.categoria", categoryID)],
  //   });

  return {
    props: { page },
  };
}
