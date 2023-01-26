import styled from "styled-components";

const GeneratePasswordInput = styled.input`
  background: none;
  border: none;
  outline: none;
  font-size: 32px;
  font-weight: 700;
  line-height: 42px;
  color: var(--color-White);
  &::placeholder {
    color: var(--color-Gray);
  }
`;

function Password() {
  return <GeneratePasswordInput placeholder="P4$5W0rD!" readOnly value="" />;
}

export default Password;
