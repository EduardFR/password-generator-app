import styled from "styled-components";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.p``;

const ValueLength = styled.h1`
  color: var(--color-NeonGreen);
`;

function SliderContent() {
  return (
    <Block>
      <Text>Character Length</Text>
      <ValueLength>10</ValueLength>
    </Block>
  );
}

export default SliderContent;
