import styled from "styled-components";
import { FacebookSquare } from "@styled-icons/boxicons-logos";
import { Instagram } from "@styled-icons/boxicons-logos";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const IgIcon = styled(Instagram)`
  display: flex;
  color: #567daf;
  height: 3em;
`;

const FbIcon = styled(FacebookSquare)`
  display: flex;
  color: #567daf;
  height: 3em;
`;

const Logo = styled.div`
  font-size: 3em;
  font-weight: 900;
  display: flex;
  align-items: center;
  span:first-child {
    color: #d45858;
  }
  span:last-child {
    color: #567daf;
  }
  @media (max-width: 900px) {
  }
`;

const Footer = () => {
  return (
    <Container>
      <Logo>
        <span>P</span>
        <span>D</span>
      </Logo>
      <LinksContainer>
        <a
          href="https://www.facebook.com/edustajistoryhmapd/ "
          target="_blank"
          rel="noreferrer"
        >
          <FbIcon />
        </a>
        <a
          href="https://www.instagram.com/edariryhma_pd/"
          target="_blank"
          rel="noreferrer"
        >
          <IgIcon />
        </a>
      </LinksContainer>
    </Container>
  );
};

export default Footer;
