import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";
import ContentBlock from "../components/ContentBlock";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PeopleGrid from "../components/PeopleGrid";
import { getLocalData } from "../lib/localdata";

type Person = {
  nimi: string;
  ala: string;
  kuva: string;
};

interface DataContent {
  varsinaiset: Person[];
  varat: Person[];
  hallitus: Person[];
  muut: Person[];
}

interface LocalData {
  localData: DataContent;
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Nunito Sans, sans-serif;
    background-color: #fdfffc;
    scroll-behavior: smooth;
    scroll-padding-top: 5em;
    width: 100%;
    @media (max-width: 900px) {
      scroll-padding-top: 4em;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    :hover{
      text-decoration: underline;
    }
  }
  * {
      box-sizing: border-box;
    }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 5em;
  @media (max-width: 900px) {
    margin-top: 4em;
  }
`;

const BigText = styled.p`
  font-size: 1.5em;
`;

const Hero = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    display: flex;
    gap: 1.5em;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
    gap: 1em;
  }
`;

const HeroPolaroidImageContainer = styled.div`
  height: 100%;
  padding: 1em 1em 0.5em 1em;
  margin: 1em;
  width: 30em;
  background-color: #fdfffc;
  transform: rotate(-3deg);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1000px) {
    width: 70%;
    margin-bottom: 2em;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const HeroPolaroidText = styled.div`
  color: #383838;
  margin: 1em 0;
  text-align: center;
  font-size: 1.5em;
  @media (max-width: 1200px) {
    margin: 0.5em 0;
  }
  @media (max-width: 1000px) {
    margin: 1em 0;
  }
`;

const InstagramGrid = styled.div`
  padding: 1.5em 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 10em 10em;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export async function getStaticProps({}) {
  const localData: LocalData = await getLocalData();

  return {
    props: { localData },
  };
}

const Home: NextPage<LocalData> = ({ localData }) => {
  return (
    <div>
      <Head>
        <title>Edariryhmä PD</title>
        <meta
          name="description"
          content="PD on Jyväskylän yliopiston ylioppilaskunnan puoluepoliittisesti sitoutumaton edustajistoryhmä."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <main>
        <Content>
          <ContentBlock id="etusivu" color="blue">
            <Hero>
              <div>
                <BigText>
                  <b>PD</b> on Jyväskylän yliopiston ylioppilaskunnan
                  puoluepoliittisesti sitoutumaton edustajistoryhmä.
                </BigText>
                <p>
                  Tällä hetkellä ryhmä koostuu Pörssi ry:n, Dumppi ry:n ja
                  Stimulus ry:n opiskelijoista, mutta toivotamme kaikki
                  edustajiston toiminnasta tai edustajana toimimisesta
                  kiinnostuneet mukaan toimintaan!
                </p>
                <BigText>Opiskelijoiden ääni</BigText>
                <p>
                  Olemme JYYn edustajiston suurin ryhmä 12 edustajalla. Kuulumme
                  myös Järjestöjen Ääni- yhteistyöryhmittymään Alvarin Unionin
                  ja Luonnontieteilijöiden kanssa.
                </p>
                <BigText>Lähde ehdolle!</BigText>
                <p>
                  Haluatko lähteä ehdolle 2023 edustajistovaaleissa PDn
                  listalla?&nbsp;
                  <a href="mailto:vitimaha@student.jyu.fi,hihisihi@student.jyu.fi">
                    Ota yhteyttä ryhmävastaaviimme!
                  </a>
                </p>
              </div>
              <HeroPolaroidImageContainer>
                <Image
                  src="/meidanjengi.jpg"
                  height={900}
                  width={800}
                  alt="Meidän jengi"
                />
                <HeroPolaroidText>Meidän porukka</HeroPolaroidText>
              </HeroPolaroidImageContainer>
            </Hero>
          </ContentBlock>
          <ContentBlock id="tapa-toimia" color="white">
            <div>
              <h1>Tapa Toimia</h1>
              <p>
                Meillä PDssä jokaisen mielipide on arvokas. Emme kannata
                ryhmäkuria, vaan keskustelemme ajankohtais- ja päätösasioista
                avoimesti. Jokainen ryhmäläinen voi tehdä päätöksensä yhteisten
                keskustelujen tai omien ajatustensa perusteella ja äänestää oman
                mielensä mukaan.
                <br />
                <br />
                Kannatamme kuitenkin kaikki samankaltaista ajatusta siitä, että
                JYYn päätöksenteko tulisi olla opiskelijaa lähellä ja keskittyä
                pääosin joka tilanteessa Jyväskylä yliopiston opiskelijoiden
                etujen ajamiseen.
                <br />
                <br />
                Pyrimme pitämään hyvin matalan kynnyksen toimintaamme
                osallistumisessa: sinulla ei siis tarvitse olla vahvoja
                mielipiteitä tai selkeitä uusia ajatuksia, vaan riittää, että
                olet kiinnostunut Jyväskylän yliopiston opiskelijoita koskevista
                asioista, haluat oppia uutta ja vaikuttaa asioihin yhdessä!
              </p>
              <InstagramGrid>
                <figure data-behold-id="m3IIAMRwFybMjHHZ12eH"></figure>
                <Script
                  src="https://w.behold.so/widget.js"
                  type="module"
                ></Script>
              </InstagramGrid>
            </div>
          </ContentBlock>
          <ContentBlock id="edustajat" color="grey">
            <div>
              <h1>Edustajat</h1>
              <p>
                P&D:n edustajat toimivat useissa eri Jyväskylän yliopiston ja
                Jyväskylän yliopiston ylioppilaskunnan vaikuttamiselimissä,
                kuten ylioppilaskunnan edustajistossa ja hallituksessa,
                yliopistokollegiossa, ylioppilaslehden johtokunnassa jne.
                Vaikuttamispaikat vaihtelevat jonkin verran vuosittain, mutta
                kaikilla rintamilla tehdään silti jatkuvaa edunvalvontatyötä
                Jyväskylän yliopiston opiskelijoiden eteen.
              </p>

              <h2>PD JYYn hallituksessa ja edustajiston puheejohtajistossa</h2>
              <PeopleGrid people={localData.hallitus} />
              <h2>PD JYYn edustajistossa</h2>
              <h3>Varsinaiset edustajat</h3>
              <PeopleGrid people={localData.varsinaiset} />
              <h3>Vara edustajat</h3>
              <PeopleGrid people={localData.varat} />
              <h2>PD muissa luottamustoimissa</h2>
              <PeopleGrid people={localData.muut} />
            </div>
          </ContentBlock>
          <ContentBlock id="ota-yhteytta" color="red">
            <div>
              <h1>Ota yhteyttä</h1>
              <h3> Ryhmävastaavat</h3>
              <ContactGrid>
                <span>
                  Violan Halmetoja
                  <br />
                  <a href="mailto:vitimaha@student.jyu.fi">
                    vitimaha@student.jyu.fi
                  </a>
                </span>
                <span>
                  Hilma Hintikka
                  <br />
                  <a href="mailto:hihisihi@student.jyu.fi">
                    hihisihi@student.jyu.fi
                  </a>
                </span>
              </ContactGrid>
              <h3>Somet</h3>
              <ContactGrid>
                <a
                  href="https://www.instagram.com/edariryhma_pd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/edustajistoryhmapd/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </ContactGrid>
            </div>
          </ContentBlock>
        </Content>
        <Footer />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
