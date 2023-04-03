import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
`;

const PolaroidImageContainer = styled.div`
  height: 100%;
  padding: 1em 1em 0.5em 1em;
  margin: 1em;
  width: 100%;
  background-color: #fdfffc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PeopleGrid = () => {
  return (
    <Grid>
      <PolaroidImageContainer></PolaroidImageContainer>
      <PolaroidImageContainer></PolaroidImageContainer>
      <PolaroidImageContainer></PolaroidImageContainer>
      <PolaroidImageContainer></PolaroidImageContainer>
      <PolaroidImageContainer></PolaroidImageContainer>
      <PolaroidImageContainer></PolaroidImageContainer>
      <PolaroidImageContainer></PolaroidImageContainer>
    </Grid>
  );
};

export default PeopleGrid;
