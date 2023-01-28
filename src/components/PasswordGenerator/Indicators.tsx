import styled from "styled-components";
import Indicator from "./Indicator";

const Block = styled.div`
  display: flex;
  column-gap: 8px;
`;

interface IndicatorsType {
  color: string;
  strength: number;
}

function Indicators({ color, strength }: IndicatorsType) {
  return (
    <Block>
      <Indicator color={strength >= 3 ? color : ""} />
      <Indicator color={strength > 3 ? color : ""} />
      <Indicator color={strength > 6 ? color : ""} />
      <Indicator color={strength > 9 ? color : ""} />
    </Block>
  );
}

export default Indicators;
