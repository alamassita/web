import Head from "next/head";
import * as prismic from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import sm from "../sm.json";

import { IconComoComprar } from "../components/Icons";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ComoComprar({ page }) {
  const { scrollY } = useScroll();
  const rotate = useSpring(
    useTransform(scrollY, [0, 2800], [0, 360], { clamp: false }),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <>
      <Head>
        <title>{page.data?.meta_title}</title>
        {isFilled.keyText(page.data?.meta_description) ? (
          <meta name="description" content={page.data?.meta_description} />
        ) : null}
      </Head>
      <motion.div
        className="rotateComoComprar"
        style={{
          rotate: rotate,
        }}
      >
        <IconComoComprar />
      </motion.div>
      <SliceZone slices={page.data?.slices} components={components} />
    </>
  );
}

export async function getStaticProps() {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = prismic.createClient(sm.apiEndpoint);

  const page = await client.getByUID("como_comprar", "como-comprar", {
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
