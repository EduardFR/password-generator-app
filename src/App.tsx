import styled from "styled-components";
import ProjectContent from "./components/ProjectContent";
import ProjectTitle from "./components/ProjectTitle";

const AppWrapper = styled.div`
  width: 540px;
  margin: 100px auto;
  text-align: center;
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
