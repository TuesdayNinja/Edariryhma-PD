import styled from "styled-components";
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
  background-color: #e3e5f1;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  @media (max-width: 1050px) {
    height: 4em;
    padding: 0.5em 1em;
  }
`;

const LinkContent = styled.a`
  font-size: 1.2em;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const Links = styled.div<MobileProps>`
  display: flex;
  align-items: center;
  gap: 2em;
  height: 100%;
  color: #567daf;
  font-weight: 600;
  @media (max-width: 1050px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    background-color: #e3e5f1;
    width: 100%;
    margin-top: 4em;
    height: 22em;
    flex-direction: column;
  }
`;

const MobileWrapper = styled.div`
  height: 100%;
`;

const MenuIcon = styled(Menu)`
  display: none;
  color: #383838;
  @media (max-width: 1050px) {
    height: 3em;
    width: auto;
    display: block;
  }
`;

const XIcon = styled(X)`
  display: none;
  color: #383838;
  @media (max-width: 1050px) {
    height: 3em;
    width: auto;
    display: block;
  }
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
  @media (max-width: 1050px) {
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <Container>
      <Logo>
        <span>P</span>
        <span>D</span>
      </Logo>
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
          <Link href="/#ehdokkaat">
            <LinkContent onClick={() => setMobileMenuOpen(false)}>
              Edustajistovaaliehdokkaat
            </LinkContent>
          </Link>
          <Link href="/#vaaliOhjelma">
            <LinkContent onClick={() => setMobileMenuOpen(false)}>
              Vaaliohjelma
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
