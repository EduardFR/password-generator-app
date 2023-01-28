import styled from "styled-components";
import Indicators from "./Indicators";

const Block = styled.div`
  display: flex;
  column-gap: 15.5px;
`;

const Text = styled.h2``;

interface StrengthIndicatorType {
  color: string;
  value: string;
  strength: number;
}

function StrengthIndicator({ color, value, strength }: StrengthIndicatorType) {
  return (
    <Block>
      <Text>{value}</Text>
      <Indicators strength={strength} color={color} />
    </Block>
  );
}

export default StrengthIndicator;
