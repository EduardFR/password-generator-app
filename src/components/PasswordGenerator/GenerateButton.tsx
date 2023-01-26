import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding-top: 21px;
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  color: var(--color-DarkGray);
  background-color: var(--color-NeonGreen);
  border: 2px solid var(--color-NeonGreen);
  &:hover {
    background: none;
    color: var(--color-NeonGreen);
  }
`;

function GenerateButton() {
  return <Button>GENERATE</Button>;
}

export default GenerateButton;
