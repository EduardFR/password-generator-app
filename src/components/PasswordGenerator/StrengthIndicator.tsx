import styled from "styled-components";
import Indicators from "./Indicators";

const Block = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15.5px;
  @media ${(props) => props.theme.media.phone} {
    column-gap: 5px;
  }
`;

const Text = styled.h2`
  @media ${(props) => props.theme.media.phone} {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
`;

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
