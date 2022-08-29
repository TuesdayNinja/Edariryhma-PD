import styled from "styled-components";
import Image from "next/image";
import { FacebookSquare } from "@styled-icons/boxicons-logos";
import { Instagram } from "@styled-icons/boxicons-logos";


const Container = styled.div`
display : flex;
justify-content : space-between;
align-items : center;
padding: 1em 2em;
@media (max-width: 900px) {
    height: 4em;
    padding: 0.5em 1em;
  }
`;

const ImageContainer = styled.div`
  width: 5em;
  height: 3em;
  position: relative;
    @media (max-width: 900px) {
    width: 4em;
  }
`;

const LinksContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const IgIcon = styled(Instagram)`
display: flex;
color: black;
  @media {
    height: 4em;
    width: auto;
    display: block;
}
`;

const FbIcon = styled(FacebookSquare)`
display: flex;
color: blue;
  @media {
    height: 4em;
    width: auto;
    display: block;
}
`;


const Footer = () => {

  return (
    <Container>
      <ImageContainer>
        <Image
          src="/logo.png"
          alt="P&D"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>
      <LinksContainer>
        <a href= "https://www.facebook.com/edustajistoryhmapd/ "target="_blank">
        <FbIcon/>
        </a>
        <a href="https://www.instagram.com/edariryhma_pd/?hl=fi" target="_blank">
        <IgIcon/>
        </a>
                  
      </LinksContainer>
    </Container>
  );
};

export default Footer;
