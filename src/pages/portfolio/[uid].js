import React, { useEffect, useState } from "react";
import Head from "next/head";
import * as prismic from "@prismicio/client";
import sm from "../../sm.json";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

import { isFilled, asLink } from "@prismicio/client";

import { HeroPortfolio } from "../../components/Hero";

export default function Portfolio({ page, pagesInCategory }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pagesInCategory?.length > 0 && page?.data) {
      console.log("Page, :", page);
      console.log("pagesInCategory :", pagesInCategory);
      setLoading(false);
    }
  }, [page, pagesInCategory]);

  if (loading) return <div className="loading"></div>;
  return (
    <>
      <Head>
        <title>{page.data?.meta_title}</title>
        {isFilled.keyText(page.data?.meta_description) ? (
          <meta name="description" content={page.data?.meta_description} />
        ) : null}
      </Head>
      <HeroPortfolio
        title={page.data?.titulo}
        image={page.data?.imagem_destacada}
        content={page.data?.conteudo}
        categoriaName={page.data?.categoria.data.titulo}
        categoriaURI={page.data?.categoria.data.uid}
      />
      <SliceZone
        slices={page.data?.slices}
        components={components}
        context={{ pagesInCategory: pagesInCategory, pageID: page.id }}
      />
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = prismic.createClient(sm.apiEndpoint);

  const page = await client.getByUID("portfolio", params.uid, {
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

  const categoryID = page.data.categoria.id;
  // Use the category ID to filter for posts with that category
  const pagesInCategory = await client.getAllByType("portfolio", {
    filters: [prismic.filter.at("my.portfolio.categoria", categoryID)],
  });

  return {
    props: { page, pagesInCategory },
    revalidate: 60 * 60,
  };
}

export async function getStaticPaths() {
  const client = prismic.createClient();

  const pages = await client.getAllByType("portfolio");

  return {
    paths: pages.map((page) => {
      return asLink(page);
    }),
    fallback: true,
  };
}
