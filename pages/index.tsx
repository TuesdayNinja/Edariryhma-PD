import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";
import ContentBlock from "../components/ContentBlock";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PeopleGrid from "../components/PeopleGrid";
import PeopleGridNumber from "../components/PeopleGridNumber";
import { getLocalData } from "../lib/localdata";

type Person = {
  nimi: string;
  ala: string;
  kuva: string;
};

type PersonWithNumber = {
  nimi: string;
  ala: string;
  kuva: string;
  numero: string;
};

interface DataContent {
  varsinaiset: Person[];
  varat: Person[];
  hallitus25: Person[];
  muut: Person[];
  ehdokkaat: PersonWithNumber[];
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
    @media (max-width: 1050px) {
      scroll-padding-top: 4em;
    }
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: underline;
    :hover{
      font-weight: 600;
    }
  }
  * {
      box-sizing: border-box;
    }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 5em;
  @media (max-width: 1050px) {
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
  gap: 2em;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

const RedPoint = styled.h3`
  color: #d45858;
`;

const BluePoint = styled.h3`
  color: #567daf;
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
        <title>
          Edariryhmä PD - puoluepoliittisesti sitoutumaton JYYn edustajistoryhmä
        </title>
        <meta
          name="description"
          content="PD on Jyväskylän yliopiston ylioppilaskunnan puoluepoliittisesti sitoutumaton edustajistoryhmä, joka koostuu Pörssi ry:n, Dumppi ry:n, Stimulus ry:n ja Sporticus ry:n opiskelijoista. Ryhmä on aiemmin tunnettu nimillä P&amp;D sekä Pörssi&amp;Dumppi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header language={"fi"} />
      <main>
        <Content>
          <ContentBlock id="etusivu" color="blue">
            <Hero>
              <div>
                <BigText>
                  <b>PD</b> on Jyväskylän Yliopiston Ylioppilaskunnan
                  puoluepoliittisesti sitoutumaton edustajistoryhmä.
                </BigText>
                <p>
                  Olemme tavallisia opiskelijoita, jotka ovat kiinnostuneita
                  edistämään ylioppilaskunnan rivijäsenten etuja. Meille on
                  tärkeää välittää opiskelijoiden tarpeita, emmekä ole
                  sitoutuneet kansallisesti poliittisiin agendoihin.
                  Tavoitteenamme on olla mukana luomassa kaikkien opiskelijoiden
                  ylioppilaskuntaa ja haluamme ajaa opiskelijoiden asiaa
                  kampuksesta tai oppiainetaustasta riippumatta.
                </p>
                <p>
                  Tällä hetkellä ryhmä koostuu Pörssi ry:n, Dumppi ry:n, Algo
                  ry:n ja Syrinx ry:n opiskelijoista, mutta toivotamme kaikki
                  edustajiston toiminnasta tai edustajana toimimisesta
                  kiinnostuneet mukaan toimintaan!
                </p>
                <BigText>Opiskelijoiden ääni</BigText>
                <p>
                  Olemme JYYn edustajiston toisiksi suurin ryhmä 12 edustajalla.
                  Kuulumme myös Järjestöjen Ääni- yhteistyöryhmittymään Alvarin
                  Unionin ja Luonnontieteilijöiden kanssa.
                </p>
              </div>
              <HeroPolaroidImageContainer>
                <Image
                  src="/meidanjengi2.jpg"
                  height={800}
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
          <ContentBlock id="ehdokkaat" color="grey">
            <div>
              <h1>Ehdokkaat edustajistoon 2026-2027</h1>
              <PeopleGridNumber people={localData.ehdokkaat} />
            </div>
          </ContentBlock>
          <ContentBlock id="vaaliOhjelma" color="white">
            <div>
              <h1>PDn vaaliohjelma kaudelle 2026-2027</h1>
              <p>
                Tavoitteemme on olla mukana luomassa kaikkien opiskelijoiden
                ylioppilaskuntaa. Haluamme olla jokaista opiskelijaa varten
                juuri se edustajisto, joka ajaa opiskelijoiden asiaa,
                kampusrajoja tai oppiainetaustoja huomioimatta. Meille tärkeintä
                on välittää opiskelijoiden tarpeita sitoutumatta kansallisesti
                poliittisiin agendoihin. Olemme itse tavallisia opiskelijoita,
                jotka ovat kiinnostuneita edistämään ylioppilaskunnan
                rivijäsenen etuja. Kauttamme voit siis vaikuttaa siihen, että
                ylioppilaskunnassa keskustellaan arkeemme vaikuttavista
                asioista.
              </p>
              <BigText>
                &quot;Agoralta lähtöisin oleva järjestölähtöinen
                vaaliliitto&quot;
              </BigText>
              <RedPoint>Alennetaan jäsenmaksuja</RedPoint>
              <p>
                Jäsenmaksuja tulisi pyrkiä alentamaan pitkällä aikavälillä
                kuitenkin niin, että talous pysyy tasapainossa ja edunvalvonta
                pysyy tehokkaana.
              </p>
              <h4>Järkevällä liiketoiminnalla</h4>
              <p>
                Ylioppilaskunta mielletään erityisesti
                edunvalvontaorganisaationa. Siitä huolimatta vain osa jokaisen
                opiskelijan vuosittaisista jäsenmaksuista on mennyt itse
                varsinaiseen edunvalvontaan. Viimeisimmän edustajistokauden
                aikana myös PD oli mukana karsimassa kannattamatonta
                liiketoimintaa.{" "}
              </p>
              <p>
                Tavoiteenamme on vaatia kattavampaa tietoa edustajistolle
                liiketoiminnan tilasta, jotta edustajisto voi tehdä tietoon
                perustuvaa omistajaohjausta tehokkaasti ja varmistaa
                liiketoiminnan kestävyyden.
              </p>
              <h4>Budjetoinnin tarkastelulla</h4>
              <p>
                Budjetista päätettäessä tulisi miettiä tarkkaan mihin yhteiset
                varamme käytetään. Esimerkiksi ylioppilaslehti Jylkkärin asemaa
                olisi hyvä tarkastella sillä sen osuus on tällä hetkellä noin 11
                euroa jäsenmaksusta. Ollakseen hintansa arvoinen Jylkkärin
                tulisi sopeutuu palvelemaan laajemmin opiskelijayhteisöä tai
                rahoituksen tulisi riippua vähemmän jäsenmaksuista. Nyt tämä
                hintava jäsenpalvelu on saatavilla vain suomeksi eikä sitä koeta
                kyselyiden mukaan hyödylliseksi seminaarinmäen ulkopuolella.{" "}
              </p>
              <p>
                Tavoitteenamme on nostaa talouskeskustelua vahvemmin esiin
                edustajistossa.
              </p>
              <RedPoint>Edistetään yhdenvertaisuutta</RedPoint>
              <h4>Kansainvälisyys</h4>
              <p>
                Yliopiston tahtotila on kansainvälistyä. Se on läpileikkaava
                teema strategiassa. Pelkästään sanat paperilla eivät auta
                kansainvälisiä opiskelijoita sopeutumaan ja osallistumaan
                toimintaamme.{" "}
              </p>
              <p>
                PD haluaa avata edustajiston keskustelun siitä, mikä on
                tahtotila liikkua kohti kansainvälisten opiskelijoiden aseman
                parantamista. Kysymykset jäävät muuten roikkumaan ilmaan siitä:{" "}
              </p>
              <ul>
                <li>
                  Miten ylioppilaskunta haluaa ja voi parantaa kansainvälisten
                  opiskelijoiden osallisuutta ja osallistumista toimintaansa?
                </li>
                <li>
                  Miten sama yliopiston suuntaan? Mitä asioita ylioppilaskunta
                  voi vaatia yliopistolta osallisuuden mahdollistamiseksi ja
                  kaiken palvelun kehittämiseksi (kaksikieliseksi)?
                </li>
              </ul>
              <h4>Yhdenvertainen haalarikansa</h4>
              <p>
                Emme suvaitse minkään näköistä syrjintää tai toiseuttavaa
                toimintaa. Tahtotilamme on kuitenkin puuttua nyt oppiaineita
                kohtaan kohdistuvaan syrjintään. Ehdokkaidemme toimesta
                yhdenvertaisista toimista tullaan keskustelemaan, jotta
                kenenkään ei tarvitsisi törmätä olettamuksiin yliopistoon
                tullessa, myöskään oppiaineeseen liittyen.{" "}
              </p>
              <RedPoint>Tilat taattava opiskeluun ja järjestöille</RedPoint>
              <h4>24/7 opiskelutilat takaisin</h4>
              <p>
                Opiskelijoilla on erilaisia elämäntilanteita ja opintojen
                edistäminen usein saattaa venyä toimistoaikojen ulkopuolelle.
                Yliopistolla tulisi olla tilat joissa opiskelijat voivat
                työskennellä heille sopivimpaan aikaan.{" "}
              </p>
              <p>
                Optimi tilanteessa koko kampus olisi avoinna opiskelijoille
                ympäri vuorokauden. Mikäli yliopiston tilapalvelut eivät tähän
                taivu, selvityksen arvoista olisi voisiko ylioppilaskunnan
                omistaman Opinkiven tiloja muokata 24/7 tiloiksi.
              </p>
              <h4>Pidetään kiinni ainejärjestötiloista </h4>
              <p>
                Ainejärjestöillä tulee olla toimintaan soveltuvat ja riittävän
                kokoiset tilat. Järjestötilat rakentavat yhteisöllisyyttä, kun
                opiskelijat voivat tiloissa hengähtää luentojen välissä,
                opiskella tai ihan vain viettää aikaa ja tutustua muihin saman
                alan opiskelijoihin. Lisäksi tilat toimivat toimistoina, joissa
                järjestötoimijat voivat palvella jäsenistöä.
              </p>
              <p>
                Haluamme tuoda esiin järjestötilojen tärkeyttä ja varmistaa,
                että yliopisto huomioi järjestötilat tilahankkeissaan.{" "}
              </p>
              <RedPoint>JYU ja JAMK yhdistymiseen varautuminen</RedPoint>
              <h4>Opitaan muiden virheistä</h4>
              <p>
                Muualla korkeakoulujen yhdistymisprojektit ovat aiheuttaneet
                haittaa opiskeluun, kun kurssien laatu on kärsinyt joko liian
                kiireellisesti tehdyn kurssien yhdistämisen tai liiallisen
                yhdistämisen vuoksi. Näistä virheistä pitää oppia ja
                ylioppilaskunnan tulee alkaa valmistautua hyvissä ajoin
                yliopiston ja ammattikorkean yhdistymiseen, jotta pystymme
                varmistamaan laadukkaan opetuksen jatkossakin.
              </p>
              <BluePoint>
                Miksi tehdä vain jotain, jos edarissa voi tehdä Parasta Duunia?
              </BluePoint>
              <p>
                Haluamme kaikkien opiskelijoiden JYYn. Siksi haluamme
                opiskeljoille tärkeiden asioiden edistyvän ylioppilaskunnassa.
                Emme aja kansallista poliittista teemaa, vaan keskitymme tähän
                kampusalueeseen. Siksi mielestämme ylioppilaskunnassa käytävän
                keskustelun pitäisi koskea opiskelijoitamme ja heidän etujaan.
                Kampus on opiskelijoita varten, sinua varten!
              </p>
            </div>
          </ContentBlock>
          <ContentBlock id="edustajat" color="grey">
            <div>
              <h1>Edustajat 2024-2025</h1>
              <p>
                PD:n edustajat toimivat useissa eri Jyväskylän yliopiston ja
                Jyväskylän yliopiston ylioppilaskunnan vaikuttamiselimissä,
                kuten ylioppilaskunnan edustajistossa ja hallituksessa,
                yliopistokollegiossa, ylioppilaslehden johtokunnassa jne.
                Vaikuttamispaikat vaihtelevat jonkin verran vuosittain, mutta
                kaikilla rintamilla tehdään silti jatkuvaa edunvalvontatyötä
                Jyväskylän yliopiston opiskelijoiden eteen.
              </p>

              <h2>PD JYYn hallituksessa</h2>
              <PeopleGrid people={localData.hallitus25} />
              <h2>PD JYYn edustajistossa</h2>
              <h3>Varsinaiset edustajat</h3>
              <PeopleGrid people={localData.varsinaiset} />
              <h3>Varaedustajat</h3>
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
                  Loviisa Hurme
                  <br />
                  <a href="mailto:hurmelol@student.jyu.fi">
                    hurmelol@student.jyu.fi
                  </a>
                </span>
                <span>
                  Mikael Vilhunen
                  <br />
                  <a href="mailto:vilhunem@student.jyu.fi">
                    vilhunem@student.jyu.fi
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
