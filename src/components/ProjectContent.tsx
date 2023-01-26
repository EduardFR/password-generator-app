import styled from "styled-components";
import PasswordBlock from "./Password/PasswordBlock";
import GeneratorBlock from "./PasswordGenerator/GeneratorBlock";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

function ProjectContent() {
  return (
    <Container>
      <PasswordBlock />
      <GeneratorBlock />
    </Container>
  );
}

export default ProjectContent;
