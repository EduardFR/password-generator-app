import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getTypeValueAction } from "../../store/reducers/CharacterTypeReducer";
import Checkbox from "./Checkbox";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

function CheckboxGroup() {
  const dispatch = useDispatch();
  const Character = useTypedSelector((state) => state.CharacterType);

  const onChange = (value: boolean, name: string): void => {
    dispatch(getTypeValueAction({ value, name }));
  };

  return (
    <Block>
      <Checkbox
        onChange={onChange}
        characterName={Character.upper.name}
        checked={Character.upper.value}
        keyName="upper"
      />
      <Checkbox
        onChange={onChange}
        characterName={Character.lower.name}
        checked={Character.lower.value}
        keyName="lower"
      />
      <Checkbox
        onChange={onChange}
        characterName={Character.numbers.name}
        checked={Character.numbers.value}
        keyName="numbers"
      />
      <Checkbox
        onChange={onChange}
        characterName={Character.symbols.name}
        checked={Character.symbols.value}
        keyName="symbols"
      />
    </Block>
  );
}

export default CheckboxGroup;
