import styled from "styled-components";
import Indicator from "./Indicator";

const Block = styled.div`
  display: flex;
  column-gap: 8px;
`;

function Indicators() {
  return (
    <Block>
      <Indicator color="var(--color-Yellow)" />
      <Indicator color="var(--color-Yellow)" />
      <Indicator color="var(--color-Yellow)" />
      <Indicator />
    </Block>
  );
}

export default Indicators;
