import Head from "next/head";
import * as prismic from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import sm from "../sm.json";

export default function Home({ page }) {
  console.log(page);
  return (
    <>
      <Head>
        <title>{page.data?.meta_title}</title>
        {isFilled.keyText(page.data?.meta_description) ? (
          <meta name="description" content={page.data?.meta_description} />
        ) : null}
      </Head>
      <SliceZone slices={page.data?.slices} components={components} />
    </>
  );
}

export async function getStaticProps() {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = prismic.createClient(sm.apiEndpoint);
  // The query fetches the page's data based on the current URL.
  // const page = await client.getSingle("homepage", {
  //   graphQuery: `{
  //     homepage {
  //       slices {
  //         ...on cases_portfolio {
  //           variation {
  //             ...on default {
  //               items {
  //                 categoria {
  //                   ...on category {
  //                     titulo
  //                     subtitulo
  //                     conteudo
  //                     imagem_destacada
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`,
  // });
  const page = await client.getByUID("homepage", "homepage", {
    fetchLinks: [
      "portfolio_categoria.uid",
      "portfolio_categoria.titulo",
      "portfolio_categoria.conteudo",
      "portfolio_categoria.subtitulo",
      "portfolio_categoria.imagem_destacada",
      "portfolio_categoria.url",
    ],
  });

  return {
    props: { page },
  };
}
