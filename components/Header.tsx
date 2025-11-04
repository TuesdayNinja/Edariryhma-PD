import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "@styled-icons/boxicons-regular";

interface MobileProps {
  open: boolean;
}

type Language = {
  language: string;
};

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
  @media (max-width: 1200px) {
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

const LanguageLink = styled.a`
  font-size: 0.8em;
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
  @media (max-width: 1200px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    background-color: #e3e5f1;
    width: 100%;
    margin-top: 4em;
    height: 26em;
    flex-direction: column;
  }
`;

const MobileWrapper = styled.div`
  height: 100%;
`;

const MenuIcon = styled(Menu)`
  display: none;
  color: #383838;
  @media (max-width: 1200px) {
    height: 3em;
    width: auto;
    display: block;
  }
`;

const XIcon = styled(X)`
  display: none;
  color: #383838;
  @media (max-width: 1200px) {
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
  @media (max-width: 1200px) {
  }
`;

const Button = styled.div`
  font-size: 1.2em;
  background-color: #d45858;
  color: white;
  padding: 0.2em 0.6em;
  border-radius: 10px;
  font-weight: 900;
  display: flex;
  align-items: center;
`;

const Header = (language: Language) => {
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
        {language.language == "en" ? (
          <Links open={mobileMenuOpen}>
            <LinkContent
              onClick={() => setMobileMenuOpen(false)}
              href="https://vaalit.trevea.fi/jyy/voting/login.do"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Vote</Button>
            </LinkContent>
            <Link href="/en/#tapa-toimia">
              <LinkContent onClick={() => setMobileMenuOpen(false)}>
                Way of Working
              </LinkContent>
            </Link>
            <Link href="/en/#ehdokkaat">
              <LinkContent onClick={() => setMobileMenuOpen(false)}>
                Candidates
              </LinkContent>
            </Link>
            <Link href="/en/#vaaliOhjelma">
              <LinkContent onClick={() => setMobileMenuOpen(false)}>
                Election platform
              </LinkContent>
            </Link>
            <Link href="/en/#edustajat">
              <LinkContent onClick={() => setMobileMenuOpen(false)}>
                Representatives
              </LinkContent>
            </Link>
            <Link href="/en/#ota-yhteytta">
              <LinkContent onClick={() => setMobileMenuOpen(false)}>
                Contact
              </LinkContent>
            </Link>
            <Link href="/">
              <LanguageLink onClick={() => setMobileMenuOpen(false)}>
                Suomeksi
              </LanguageLink>
            </Link>
          </Links>
        ) : (
          <Links open={mobileMenuOpen}>
            <LinkContent
              onClick={() => setMobileMenuOpen(false)}
              href="https://vaalit.trevea.fi/jyy/voting/login.do"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Äänestä</Button>
            </LinkContent>
            <Link href="/#tapa-toimia">
              <LinkContent onClick={() => setMobileMenuOpen(false)}>
                Tapa toimia
              </LinkContent>
            </Link>
            <Link href="/#ehdokkaat">
              <LinkContent onClick={() => setMobileMenuOpen(false)}>
                Ehdokkaat
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
            <Link href="/en">
              <LanguageLink onClick={() => setMobileMenuOpen(false)}>
                In English
              </LanguageLink>
            </Link>
          </Links>
        )}
      </MobileWrapper>
    </Container>
  );
};

export default Header;
