import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "@styled-icons/boxicons-regular";

interface MobileProps {
  open: boolean;
}

const Container = styled.div`
  height: 5em;
  width: 100%;
  padding: 1em 2em;
  position: fixed;
  top: 0;
  background-color: #dfe5e5;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    height: 4em;
    padding: 0.5em 1em;
  }
`;

const LinkContent = styled.a`
  font-size: 1.5em;
  font-family: droid-sans, sans-serif;
`;

const Links = styled.div<MobileProps>`
  display: flex;
  align-items: center;
  gap: 2em;
  height: 100%;
  @media (max-width: 900px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    background-color: #dfe5e5;
    width: 100%;
    margin-top: 4em;
    height: 18em;
    flex-direction: column;
  }
`;

const MobileWrapper = styled.div`
  height: 100%;
`;

const MenuIcon = styled(Menu)`
  display: none;
  color: #383838;
  @media (max-width: 900px) {
    height: 3em;
    width: auto;
    display: block;
  }
`;

const XIcon = styled(X)`
  display: none;
  color: #383838;
  @media (max-width: 900px) {
    height: 3em;
    width: auto;
    display: block;
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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => setMobileMenuOpen(!mobileMenuOpen);

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
      <MobileWrapper>
        {mobileMenuOpen ? (
          <XIcon onClick={handleMenuClick} />
        ) : (
          <MenuIcon onClick={handleMenuClick} />
        )}
        <Links open={mobileMenuOpen}>
          <Link href="/#etusivu">
            <LinkContent onClick={() => setMobileMenuOpen(false)}>
              Etusivu
            </LinkContent>
          </Link>
          <Link href="/#tapa-toimia">
            <LinkContent onClick={() => setMobileMenuOpen(false)}>
              Tapa toimia
            </LinkContent>
          </Link>
          <Link href="/#edustajat">
            <LinkContent onClick={() => setMobileMenuOpen(false)}>
              Edustajat
            </LinkContent>
          </Link>
          <Link href="/#ota-yhteytta">
            <LinkContent onClick={() => setMobileMenuOpen(false)}>
              Ota yhteyttä
            </LinkContent>
          </Link>
        </Links>
      </MobileWrapper>
    </Container>
  );
};

export default Header;
