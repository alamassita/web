import React, { useEffect, useState } from "react";
import Head from "next/head";
import * as prismic from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import sm from "../sm.json";

import { HeroCategory } from "../components/Hero";

export default function Depoimentos({ page, allTestimonials }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (page?.data && allTestimonials) {
      console.log("Page, :", page);
      console.log("Testimonials, :", allTestimonials);
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
      <SliceZone
        slices={page.data?.slices}
        components={components}
        context={{ allTestimonials: allTestimonials }}
      />
    </>
  );
}

export async function getStaticProps() {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = prismic.createClient(sm.apiEndpoint);

  const page = await client.getByUID("depoimentos", "depoimentos", {
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

  const allTestimonials = await client.getAllByType("depoimento");

  return {
    props: { page, allTestimonials },
  };
}
