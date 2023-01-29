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

  const onChange = (active: boolean, name: string): void => {
    dispatch(getTypeValueAction({ active, name }));
  };

  return (
    <Block>
      <Checkbox
        onChange={onChange}
        characterName="Include Uppercase Letters"
        checked={Character.upper.active}
        disabled={
          !Character.lower.active &&
          !Character.numbers.active &&
          !Character.symbols.active
        }
        keyName="upper"
      />
      <Checkbox
        onChange={onChange}
        characterName="Include Lowercase Letters"
        checked={Character.lower.active}
        disabled={
          !Character.upper.active &&
          !Character.numbers.active &&
          !Character.symbols.active
        }
        keyName="lower"
      />
      <Checkbox
        onChange={onChange}
        characterName="Include Numbers"
        checked={Character.numbers.active}
        disabled={
          !Character.lower.active &&
          !Character.upper.active &&
          !Character.symbols.active
        }
        keyName="numbers"
      />
      <Checkbox
        onChange={onChange}
        characterName="Include Symbols"
        checked={Character.symbols.active}
        disabled={
          !Character.lower.active &&
          !Character.numbers.active &&
          !Character.upper.active
        }
        keyName="symbols"
      />
    </Block>
  );
}

export default CheckboxGroup;
