import styled from "styled-components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Password from "./Password";
import PasswordCopyButton from "./PasswordCopyButton";

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 19px 30px;
  background-color: var(--color-DarkGray);
`;

function PasswordBlock() {
  const password = useTypedSelector((state) => state.Password.value);

  return (
    <Block>
      <Password value={password} />
      <PasswordCopyButton value={password} />
    </Block>
  );
}

export default PasswordBlock;
