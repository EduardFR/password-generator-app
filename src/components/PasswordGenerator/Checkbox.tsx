import styled from "styled-components";
import { ReactComponent as CheckSVG } from "../../assets/Path 2.svg";

const Block = styled.div`
  user-select: none;
  display: flex;
  column-gap: 24px;
`;
const CheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-White);
  &:hover {
    border: 2px solid var(--color-NeonGreen);
  }
`;

const CheckboxSpan = styled.span`
  visibility: hidden;
  position: absolute;
  text-align: center;
  top: -2px;
  left: -2px;
  width: 20px;
  height: 20px;
  background: var(--color-NeonGreen);
  border: 2px solid var(--color-NeonGreen);
`;

const CheckboxStyle = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + span {
    visibility: inherit;
  }
`;

const Check = styled(CheckSVG)`
  visibility: inherit;
`;

const Text = styled.p``;

function Checkbox() {
  return (
    <Block>
      <CheckboxLabel>
        <CheckboxStyle type="checkbox" />
        <CheckboxSpan>
          <Check />
        </CheckboxSpan>
      </CheckboxLabel>
      <Text>Include Uppercase Letters</Text>
    </Block>
  );
}

export default Checkbox;