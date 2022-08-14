import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";
import ContentBlock from "../components/ContentBlock";
import Header from "../components/Header";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: freight-sans-pro, sans-serif;
    background-color: #fdfffc;
  }

  h1 {
    font-family: droid-sans, sans-serif;
  }

  h2 {
    font-family: droid-sans, sans-serif;
  }

  h3 {
    font-family: droid-sans, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  * {
      box-sizing: border-box;
    }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 5em;
`;

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
      <GlobalStyle />
      <Header />
      <main>
        <Content>
          <ContentBlock color="blue">
            <p>
              P&amp;D on Jyväskylän yliopiston ylioppilaskunnan
              puoluepoliittisesti sitoutumaton edustajistoryhmä. Olemma suurin
              ryhmä kahdellatoista JYYn edustajistopaikalla. P&amp;D kuuluu myös
              Järjestöjen ääni -yhteistyöryhmittymään yhdessä Alvarin unionin ja
              Luonnontieteilijöiden kanssa. Koostumme tällähetkellä
              Pörssiläisistä, Dumppareista ja Stimpoista, mutta toivotamme
              kaikki edaritoiminnasta kiinnistuneet mukaan kaikista
              ainejärjestöistä!{" "}
            </p>
          </ContentBlock>
        </Content>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
