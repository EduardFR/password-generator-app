import { useDispatch } from "react-redux";
import styled from "styled-components";
import { generatePassword } from "../../helpers/generatePassword";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getPasswordValueAction } from "../../store/reducers/PasswordReducer";

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
  const dispatch = useDispatch();
  const sliderValue = useTypedSelector((state) => state.CharacterLength.value);
  const chracterTypes = useTypedSelector((state) => state.CharacterType);

  const onClick = () => {
    dispatch(
      getPasswordValueAction(
        generatePassword(
          sliderValue,
          chracterTypes.upper.value,
          chracterTypes.lower.value,
          chracterTypes.numbers.value,
          chracterTypes.symbols.value
        )
      )
    );
  };

  return <Button onClick={() => onClick()}>GENERATE</Button>;
}

export default GenerateButton;
