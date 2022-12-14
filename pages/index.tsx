import type { NextPage } from "next";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import ContentBlock from "../components/ContentBlock";
import Header from "../components/Header";
import Image from "next/image";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: freight-sans-pro, sans-serif;
    background-color: #fdfffc;
    scroll-behavior: smooth;
    scroll-padding-top: 5em;
    @media (max-width: 900px) {
      scroll-padding-top: 4em;
    }
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
    cursor: pointer;
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
  font-family: droid-serif;
  @media (max-width: 1200px) {
    margin: 0.5em 0;
  }
  @media (max-width: 1000px) {
    margin: 1em 0;
  }
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
          <ContentBlock id="etusivu" color="blue">
            <Hero>
              <BigText>
                <b>P&amp;D</b> on Jyväskylän yliopiston ylioppilaskunnan
                puoluepoliittisesti sitoutumaton edustajistoryhmä.
                <br />
                <br />
                Olemme suurin ryhmä kahdellatoista JYYn edustajistopaikalla.
                P&amp;D kuuluu myös Järjestöjen ääni -yhteistyöryhmittymään
                yhdessä Alvarin unionin ja Luonnontieteilijöiden kanssa.
                <br />
                <br />
                Koostumme tällä hetkellä Pörssin, Dumppin ja Stimuluksen
                opiskelijoista, mutta toivotamme edaritoiminnasta kiinnostuneet
                mukaan kaikista ainejärjestöistä!{" "}
              </BigText>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                nec tempor neque. Nullam ligula metus, consectetur ut faucibus
                in, aliquam et velit. Nam maximus viverra ipsum non mattis.
                Quisque non purus id lorem finibus varius eu ut erat. Etiam
                tincidunt vel orci nec venenatis. Sed efficitur, elit non
                elementum viverra, est erat elementum sem, eu tincidunt elit ex
                eu metus. Sed condimentum tincidunt sagittis. Sed egestas et
                massa sit amet sagittis. Praesent porttitor, sapien quis finibus
                tempor, justo urna tincidunt lectus, quis convallis lorem diam
                quis metus. Sed eu molestie turpis. Integer eget molestie diam.
                Nullam vel sapien lacinia, euismod leo sit amet, sagittis nisi.
                Fusce imperdiet nisi sit amet finibus molestie. Integer
                hendrerit sem ac nibh lobortis, viverra accumsan metus
                imperdiet. Nulla tellus nunc, rhoncus eget bibendum eget,
                facilisis sed risus. Mauris egestas laoreet lorem, ac porttitor
                nibh lacinia vitae. Integer sagittis massa ut ipsum vehicula
                placerat sed consectetur ligula. Curabitur eleifend lectus vitae
                vestibulum vulputate. Phasellus vulputate accumsan viverra.
                Donec dapibus tortor in odio pellentesque, a faucibus risus
                volutpat. Donec eget odio turpis. Aliquam et justo malesuada,
                accumsan urna nec, volutpat erat. Morbi bibendum erat vel eros
                accumsan, quis consectetur justo finibus. Ut blandit a nibh vel
                dictum.
              </p>
            </div>
          </ContentBlock>
          <ContentBlock id="edustajat" color="grey">
            <div>
              <h1>Edustajat</h1>
              <p>
                P&amp;D:n edustajat toimivat useissa eri Jyväskylän yliopiston
                ja Jyväskylän yliopiston ylioppilaskunnan vaikuttamiselimissä,
                kuten ylioppilaskunnan edustajistossa ja hallituksessa,
                yliopistokollegiossa, ylioppilaslehden johtokunnassa jne.
                Vaikuttamispaikat vaihtelevat jonkin verran vuosittain, mutta
                kaikilla rintamilla tehdään silti jatkuvaa edunvalvontatyötä
                P&amp;D:läisten eteen.
              </p>

              <h2>P&amp;D JYYn hallituksessa</h2>

              <h2>P&amp;D JYYn edustajistossa</h2>
              <h3>Varsinaiset edustajat</h3>
              <h3>Vara edustajat</h3>

              <h2>P&amp;D muissa luottamustoimissa</h2>
            </div>
          </ContentBlock>
          <ContentBlock id="ota-yhteytta" color="red">
            <div>
              <h1>Ota yhteyttä</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                nec tempor neque. Nullam ligula metus, consectetur ut faucibus
                in, aliquam et velit. Nam maximus viverra ipsum non mattis.
                Quisque non purus id lorem finibus varius eu ut erat. Etiam
                tincidunt vel orci nec venenatis. Sed efficitur, elit non
                elementum viverra, est erat elementum sem, eu tincidunt elit ex
                eu metus. Sed condimentum tincidunt sagittis. Sed egestas et
                massa sit amet sagittis. Praesent porttitor, sapien quis finibus
                tempor, justo urna tincidunt lectus, quis convallis lorem diam
                quis metus. Sed eu molestie turpis. Integer eget molestie diam.
                Nullam vel sapien lacinia, euismod leo sit amet, sagittis nisi.
                Fusce imperdiet nisi sit amet finibus molestie. Integer
                hendrerit sem ac nibh lobortis, viverra accumsan metus
                imperdiet. Nulla tellus nunc, rhoncus eget bibendum eget,
                facilisis sed risus. Mauris egestas laoreet lorem, ac porttitor
                nibh lacinia vitae. Integer sagittis massa ut ipsum vehicula
                placerat sed consectetur ligula. Curabitur eleifend lectus vitae
                vestibulum vulputate. Phasellus vulputate accumsan viverra.
                Donec dapibus tortor in odio pellentesque, a faucibus risus
                volutpat. Donec eget odio turpis. Aliquam et justo malesuada,
                accumsan urna nec, volutpat erat. Morbi bibendum erat vel eros
                accumsan, quis consectetur justo finibus. Ut blandit a nibh vel
                dictum.
              </p>
            </div>
          </ContentBlock>
        </Content>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
