import styled from "styled-components";
import Slider from "./Slider";
import SliderContent from "./SliderContent";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

function SliderBlock() {
  return (
    <Form>
      <SliderContent />
      <Slider />
    </Form>
  );
}

export default SliderBlock;
