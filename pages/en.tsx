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
  candidates: PersonWithNumber[];
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
          content="PD on Jyväskylän yliopiston ylioppilaskunnan puoluepoliittisesti sitoutumaton edustajistoryhmä."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header language={"en"} />
      <main>
        <Content>
          <ContentBlock id="etusivu" color="blue">
            <Hero>
              <div>
                <BigText>
                  <b>PD</b> is a politically independent representative group
                  within the Student Union of the University of Jyväskylä
                </BigText>
                <p>
                  We are ordinary students who are interested in promoting the
                  interests of regular student union members. It’s important to
                  us to represent students’ needs, and we are not bound by any
                  national political agendas. Our goal is to help build a
                  student union that serves all students, and we want to
                  advocate for student interests regardless of campus or field
                  of study.
                </p>
                <p>
                  Currently, our group consists of students from Pörssi ry,
                  Dumppi ry, Algo ry, and Syrinx ry, but we warmly welcome
                  anyone interested in the work of the Student Union
                  Representative Council or in becoming a representative to join
                  us!
                </p>
                <BigText>The Voice of Students</BigText>
                <p>
                  We are the second-largest group in JYY’s Representative
                  Council, with 12 representatives. We are also part of the
                  “Järjestöjen Ääni” (Voice of Organizations) election ring,
                  together with Alvarin Unioni and Luonnontieteilijät.
                </p>
              </div>
              <HeroPolaroidImageContainer>
                <Image
                  src="/meidanjengi2.jpg"
                  height={800}
                  width={800}
                  alt="Meidän jengi"
                />
                <HeroPolaroidText>Our group</HeroPolaroidText>
              </HeroPolaroidImageContainer>
            </Hero>
          </ContentBlock>
          <ContentBlock id="tapa-toimia" color="white">
            <div>
              <h1>Our Way of Working</h1>
              <p>
                At PD, every opinion matters. We don’t believe in strict group
                discipline. Each member can make their own decisions based on
                our shared discussions or their personal views and vote
                according to their own judgment.
                <br />
                <br />
                However, we all share a common understanding that JYY’s
                decision-making should stay close to the students and focus
                primarily, in every situation, on promoting the interests of the
                students of the University of Jyväskylä.
                <br />
                <br />
                We strive to keep participation in our activities as easy and
                open as possible: you don’t need to have strong opinions or
                clear new ideas. It’s enough that you’re interested in matters
                concerning the students of the University of Jyväskylä, want to
                learn new things, and wish to make a difference together!
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
              <h1>
                Candidates for the JYY council of representatives for the term
                2026-2027
              </h1>
              <PeopleGridNumber people={localData.candidates} />
            </div>
          </ContentBlock>
          <ContentBlock id="vaaliOhjelma" color="white">
            <div>
              <h1>PD’s Election Platform for the 2026–2027 Term</h1>
              <p>
                Our goal is to help build a Student Union for all students. We
                want to be the kind of Representative Council that stands up for
                every student, regardless of campus or field of study. What
                matters most to us is addressing students’ needs without
                committing to any national political agendas. We are ordinary
                students ourselves, interested in improving the everyday lives
                and interests of regular Student Union members. Through us, you
                can help ensure that the Student Union discusses issues that
                truly affect our daily lives.
              </p>
              <BigText>
                &quot;An organization-based electoral alliance originating from
                Agora.&quot;
              </BigText>
              <RedPoint>Lower Membership Fees</RedPoint>
              <p>
                Membership fees should be gradually reduced in the long term so
                that the Student Union’s finances remain balanced and its
                advocacy work stays effective.
              </p>
              <h4>Through Responsible Business Operations</h4>
              <p>
                The Student Union is primarily seen as an advocacy organization.
                Nevertheless, only part of each student’s annual membership fee
                actually goes toward advocacy itself. During the last
                Representative Council term, PD was also involved in cutting
                down unprofitable business operations.
              </p>
              <p>
                Our goal is to demand more comprehensive information for the
                Representative Council about the state of JYY’s business
                activities, so that the Council can make informed ownership
                decisions and ensure the sustainability of those operations.
              </p>
              <h4>By Reviewing the Budget</h4>
              <p>
                When deciding on the budget, we should carefully consider how
                our shared resources are used. For example, the position of the
                student magazine Jylkkäri should be reviewed, as it currently
                accounts for about €11 of each membership fee. To be worth its
                cost, Jylkkäri should better serve the wider student community,
                or its funding should rely less on membership fees. At present,
                this costly service is only available in Finnish and, according
                to surveys, is not seen as useful outside the Seminaarinmäki
                campus.{" "}
              </p>
              <p>
                Our aim is to bring financial discussions more strongly into the
                Representative Council.
              </p>
              <RedPoint>Promoting Equality</RedPoint>
              <h4>Internationality</h4>
              <p>
                The university’s strategy strongly emphasizes
                internationalization. But words on paper alone don’t help
                international students adapt or participate in our activities.{" "}
              </p>
              <p>
                PD wants to open a discussion in the Representative Council
                about how to improve the position of international students.
                Without this discussion, key questions remain unanswered:{" "}
              </p>
              <ul>
                <li>
                  How does the Student Union want and plan to enhance the
                  inclusion and participation of international students?
                </li>
                <li>
                  What can the Student Union demand from the university to
                  promote inclusion and improve services (for example, by making
                  them bilingual)?
                </li>
              </ul>
              <h4>Equal Student Community</h4>
              <p>
                We do not tolerate any form of discrimination or exclusion.
                However, we want to address the current issue of discrimination
                between study programs. Our candidates will promote discussions
                about equality measures so that no one faces assumptions or bias
                when starting their studies — including those based on one’s
                field of study.{" "}
              </p>
              <RedPoint>
                Ensuring Spaces for Studying and Student Organizations
              </RedPoint>
              <h4>Bring Back 24/7 Study Spaces</h4>
              <p>
                Students have diverse life situations, and studying often
                extends beyond office hours. The university should offer spaces
                where students can work whenever it suits them best.{" "}
              </p>
              <p>
                Ideally, the entire campus would be accessible to students
                around the clock. If the university’s facilities department
                cannot provide this, it would be worth exploring whether the
                Student Union–owned Opinkivi building could be adapted for 24/7
                use.
              </p>
              <h4>Protect Student Organization Spaces</h4>
              <p>
                Student organizations need suitable and adequately sized spaces
                for their activities. Organization spaces build community.
                Students can use them to relax between lectures, study, or
                simply spend time together and meet peers from their field.
                These spaces also serve as offices where organization members
                can serve students.
              </p>
              <p>
                We want to highlight the importance of organization spaces and
                ensure that the university takes them into account in future
                facility projects.{" "}
              </p>
              <RedPoint>Preparing for the JYU–JAMK Merger</RedPoint>
              <h4>Learning from Others’ Mistakes</h4>
              <p>
                Elsewhere, university–university of applied sciences merger
                projects have harmed the quality of studies due to rushed course
                integrations or excessive consolidation. We must learn from
                these mistakes. The Student Union should begin preparing in good
                time for the merger between JYU and JAMK to ensure that
                high-quality teaching continues in the future.
              </p>
              <BluePoint>
                Why Do Just Something When You Can Do Parasta Duunia (The Best
                Work)?
              </BluePoint>
              <p>
                We want a JYY that belongs to all students. That’s why we aim to
                advance issues that matter to students within the Student Union.
                We are not driven by national political themes — our focus is
                right here, on this campus. We believe that discussions within
                the Student Union should concern our own students and their
                interests. The campus exists for students — for you!
              </p>
            </div>
          </ContentBlock>
          <ContentBlock id="edustajat" color="grey">
            <div>
              <h1>Representatives 2024–2025</h1>
              <p>
                PD’s representatives are active in various decision-making and
                advocacy bodies within the University of Jyväskylä and the
                Student Union of the University of Jyväskylä, such as the
                Student Union Representative Council and Executive Board, the
                University Collegium, and the Editorial Board of the student
                magazine, among others.
              </p>

              <h2>PD at JYY board</h2>
              <PeopleGrid people={localData.hallitus25} />
              <h2>PD at JYY RepCo</h2>
              <h3>Representatives</h3>
              <PeopleGrid people={localData.varsinaiset} />
              <h3>Deputy representatives</h3>
              <PeopleGrid people={localData.varat} />
              <h2>PD at other positions</h2>
              <PeopleGrid people={localData.muut} />
            </div>
          </ContentBlock>
          <ContentBlock id="ota-yhteytta" color="red">
            <div>
              <h1>Contact</h1>
              <h3> Group coordinators </h3>
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
              <h3>Social medias</h3>
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
