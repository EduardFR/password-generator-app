import styled from "styled-components";
import Checkbox from "./Checkbox";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

function CheckboxGroup() {
  return (
    <Block>
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </Block>
  );
}

export default CheckboxGroup;
