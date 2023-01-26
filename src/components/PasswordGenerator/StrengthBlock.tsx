import styled from "styled-components";
import StrengthIndicator from "./StrengthIndicator";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-VeryDarkGray);
  padding: 20px 32px;
`;

const Text = styled.p`
  color: var(--color-Gray);
`;

function StrengthBlock() {
  return (
    <Block>
      <Text>STRENGTH</Text>
      <StrengthIndicator />
    </Block>
  );
}

export default StrengthBlock;
