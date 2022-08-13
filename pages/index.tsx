import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import ContentBlock from "../components/ContentBlock";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Edariryhmä P&amp;D</title>
        <meta
          name="description"
          content="P&amp;D on Jyväskylän yliopiston ylioppilaskunnan puoluepoliittisesti sitoutumaton edustajistoryhmä. "
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/axk4wab.css" />
      </Head>

      <main>
        <ContentBlock color="blue">
          <p>
            P&amp;D on Jyväskylän yliopiston ylioppilaskunnan
            puoluepoliittisesti sitoutumaton edustajistoryhmä. Olemma suurin
            ryhmä kahdellatoista JYYn edustajistopaikalla. P&amp;D kuuluu myös
            Järjestöjen ääni -yhteistyöryhmittymään yhdessä Alvarin unionin ja
            Luonnontieteilijöiden kanssa. Koostumme tällähetkellä
            Pörssiläisistä, Dumppareista ja Stimpoista, mutta toivotamme kaikki
            edaritoiminnasta kiinnistuneet mukaan kaikista ainejärjestöistä!{" "}
          </p>
        </ContentBlock>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
