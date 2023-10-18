import styled from "styled-components";
import Image from "next/image";

type PersonWithNumber = {
  nimi: string;
  ala: string;
  kuva: string;
  numero: string;
};

interface PropsType {
  people: PersonWithNumber[];
}

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
`;

const PolaroidImageContainer = styled.div`
  height: 22em;
  width: 100%;
  background-color: #fdfffc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 1em;
  position: relative;
  @media (max-width: 1200px) {
    height: 18em;
  }
  @media (max-width: 1000px) {
    height: 14em;
  }
  @media (max-width: 700px) {
    height: 17em;
    width: 14em;
  }
`;

const ImageContainer = styled.div`
  height: 80%;
  position: relative;
  margin-bottom: 1em;
  @media (max-width: 1200px) {
    height: 75%;
  }
`;

const NumberContainer = styled.div<{ $even: boolean }>`
  padding: 0 0.5em;
  position: absolute;
  top: 0;
  color: white;
  right: -0.5em;
  transform: rotate(16deg);
  background-color: ${(props) => (props.$even ? "#D45858" : "#567DAF")};
  font-size: 2em;
  align-content: center;
`;

const PeopleGridNumber = (people: PropsType) => {
  return (
    <Grid>
      {people.people
        .sort((a, b) =>
          a.numero > b.numero ? 1 : b.numero > a.numero ? -1 : 0
        )
        .map((person: PersonWithNumber) => {
          return (
            <PolaroidImageContainer key={person.nimi}>
              <ImageContainer>
                <Image
                  src={`/people/${person.kuva}`}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  sizes="(max-width: 768px) 80vw,
                      (max-width: 1200px) 20vw,
                      10vw"
                />
              </ImageContainer>
              <b>{person.nimi}</b>
              <span>{person.ala}</span>
              <NumberContainer $even={parseFloat(person.numero) % 2 == 0}>
                {person.numero}
              </NumberContainer>
            </PolaroidImageContainer>
          );
        })}
    </Grid>
  );
};

export default PeopleGridNumber;
