import styled from "styled-components";
import Password from "./Password";
import PasswordCopyButton from "./PasswordCopyButton";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 32px;
  background-color: var(--color-DarkGray);
`;

function PasswordBlock() {
  return (
    <Block>
      <Password />
      <PasswordCopyButton />
    </Block>
  );
}

export default PasswordBlock;
