import Head from "next/head";
import * as prismic from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import sm from "../sm.json";

import { HeroContato } from "../components/Hero";

export default function Home({ page }) {
  return (
    <>
      <Head>
        <title>{page.data?.meta_title}</title>
        {isFilled.keyText(page.data?.meta_description) ? (
          <meta name="description" content={page.data?.meta_description} />
        ) : null}
      </Head>
      <HeroContato
        title={page.data?.titulo}
        subtitle={page.data?.subtitulo}
        content={page.data?.conteudo}
      />
      <SliceZone slices={page.data?.slices} components={components} />
    </>
  );
}

export async function getStaticProps() {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = prismic.createClient(sm.apiEndpoint);

  const page = await client.getByUID("contato", "contato", {
    fetchLinks: [
      "category.uid",
      "category.titulo",
      "category.conteudo",
      "category.subtitulo",
      "category.imagem_destacada",
      "category.url",
      "depoimento.nome",
      "depoimento.foto",
      "depoimento.conteudo",
      "depoimento.citacao",
    ],
  });

  return {
    props: { page },
  };
}
