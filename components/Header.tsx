import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  height: 5em;
  width: 100%;
  padding: 1em 2em;
  position: fixed;
  top: 0;
  background-color: #dfe5e5;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  height: 1em;
  width: 4em;
`;

const Header = () => {
  return (
    <Container>
      <Image src="/logo.png" alt="P&D" width="100" height="70" />
      <div>Stuff</div>
    </Container>
  );
};

export default Header;
