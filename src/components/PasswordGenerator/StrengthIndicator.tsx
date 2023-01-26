import styled from "styled-components";
import Indicators from "./Indicators";

const Block = styled.div`
  display: flex;
  column-gap: 15.5px;
`;

const Text = styled.h2``;

function StrengthIndicator() {
  return (
    <Block>
      <Text>MEDIUM</Text>
      <Indicators />
    </Block>
  );
}

export default StrengthIndicator;
