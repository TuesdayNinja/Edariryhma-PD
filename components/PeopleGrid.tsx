import styled from "styled-components";
import Image from "next/image";

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
  height: 20em;
  width: 100%;
  background-color: #fdfffc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 1em;
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

const PeopleGrid = () => {
  return (
    <Grid>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/aku.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Aku Buckbee</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/aija.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Aija Hokkanen</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/inka.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Inka Kauppinen</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/aku.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Aku Buckbee</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/aija.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Aija Hokkanen</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/inka.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Inka Kauppinen</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/aku.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Aku Buckbee</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/aija.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Aija Hokkanen</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/inka.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Inka Kauppinen</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/aku.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Aku Buckbee</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/aija.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Aija Hokkanen</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
      <PolaroidImageContainer>
        <ImageContainer>
          <Image
            src="/people/inka.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 20vw,
          10vw"
          />
        </ImageContainer>
        <b>Inka Kauppinen</b>
        <span>Opiskeluala</span>
      </PolaroidImageContainer>
    </Grid>
  );
};

export default PeopleGrid;
