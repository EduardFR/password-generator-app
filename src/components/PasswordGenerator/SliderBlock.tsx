import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getLengthValueAction } from "../../store/reducers/CharacterLengthReducer";
import Slider from "./Slider";
import SliderContent from "./SliderContent";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

function SliderBlock() {
  const dispatch = useDispatch();
  const sliderValue = useTypedSelector((state) => state.CharacterLength.value);

  const onChange = (value: number): void => {
    dispatch(getLengthValueAction(value));
  };

  return (
    <Form>
      <SliderContent value={sliderValue} />
      <Slider onChange={onChange} value={sliderValue} />
    </Form>
  );
}

export default SliderBlock;
