import styled from "styled-components";

type Color = "red" | "blue" | "grey" | "white";

interface Props {
  color: Color;
  id: string;
  children: JSX.Element;
}

interface ConteinerProps {
  color: Color;
}

const handleBackgroundColor = (color: Color) => {
  switch (color) {
    case "red":
      return "#930001";
    case "blue":
      return "#003276";
    case "grey":
      return "#DFE5E5";
    default:
      return "#FDFFFC";
  }
};

const handleTextColor = (color: Color) => {
  switch (color) {
    case "red":
      return "#FDFFFC";
    case "blue":
      return "#FDFFFC";
    default:
      return "#383838";
  }
};

const Container = styled.div<ConteinerProps>`
  width: 100%;
  padding: 2em 4em;
  background-color: ${({ color }) => handleBackgroundColor(color)};
  color: ${({ color }) => handleTextColor(color)};
`;

const ContentBlock = ({ color, id, children }: Props) => {
  return (
    <Container color={color} id={id}>
      {children}
    </Container>
  );
};

export default ContentBlock;
