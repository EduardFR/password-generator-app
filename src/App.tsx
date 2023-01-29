import styled from "styled-components";
import ProjectContent from "./components/ProjectContent";
import ProjectTitle from "./components/ProjectTitle";

const AppWrapper = styled.div`
  width: 540px;
  margin: 100px auto;
  text-align: center;
  @media ${(props) => props.theme.media.phone} {
    width: 92%;
    margin: 63px 16px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <ProjectTitle />
      <ProjectContent />
    </AppWrapper>
  );
}

export default App;
