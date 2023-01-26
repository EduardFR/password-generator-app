import styled from "styled-components";
import CheckboxGroup from "./CheckboxGroup";
import GenerateButton from "./GenerateButton";
import SliderBlock from "./SliderBlock";
import StrengthBlock from "./StrengthBlock";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px 32px;
  row-gap: 32px;
  background-color: var(--color-DarkGray);
`;

function GeneratorBlock() {
  return (
    <Block>
      <SliderBlock />
      <CheckboxGroup />
      <StrengthBlock />
      <GenerateButton />
    </Block>
  );
}

export default GeneratorBlock;
