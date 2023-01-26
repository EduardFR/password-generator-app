import styled from "styled-components";

const Block = styled.div`
  width: 10px;
  height: 28px;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color || "var(--color-White)"};
`;

interface IndicatorType {
  color?: string;
}

function Indicator({ color }: IndicatorType) {
  return <Block color={color} />;
}

export default Indicator;
