import styled from "styled-components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import StrengthIndicator from "./StrengthIndicator";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-VeryDarkGray);
  padding: 20px 32px;
  @media ${(props) => props.theme.media.phone} {
    justify-content: none;

    padding-left: 10px;
    padding-right: 10px;
    column-gap: 5px;
  }
`;

const Text = styled.p`
  color: var(--color-Gray);
`;

function StrengthBlock() {
  const sliderValue = useTypedSelector((state) => state.CharacterLength.value);
  const chracterTypes = useTypedSelector((state) => state.CharacterType);

  const passwordStrength = (
    upperActive: boolean,
    lowerActive: boolean,
    numbersActive: boolean,
    symbolsActive: boolean,
    sliderValue: number
  ): number => {
    let strength = 0;
    if (upperActive) {
      strength += 1;
    }
    if (lowerActive) {
      strength += 1;
    }
    if (numbersActive) {
      strength += 1;
    }
    if (symbolsActive) {
      strength += 2;
    }
    if (sliderValue < 10) {
      strength += 2;
    }
    if (sliderValue >= 10 && sliderValue < 15) {
      strength += 4;
    }
    if (sliderValue >= 15 && sliderValue <= 20) {
      strength += 6;
    }
    return strength;
  };

  const strengthValue = (passwordStrength: number): string => {
    if (passwordStrength === 3) {
      return "TOO WEAK!";
    }

    if (passwordStrength > 3 && passwordStrength <= 6) {
      return "WEAK";
    }

    if (passwordStrength > 6 && passwordStrength <= 9) {
      return "MEDIUM";
    }

    return "STRONG";
  };

  const Color = (passwordStrength: number): string => {
    if (passwordStrength === 3) {
      return "var(--color-Red)";
    }

    if (passwordStrength > 3 && passwordStrength <= 6) {
      return "var(--color-Orange)";
    }

    if (passwordStrength > 6 && passwordStrength <= 9) {
      return "var(--color-Yellow)";
    }

    return "var(--color-NeonGreen)";
  };

  let strength = passwordStrength(
    chracterTypes.upper.active,
    chracterTypes.lower.active,
    chracterTypes.numbers.active,
    chracterTypes.symbols.active,
    sliderValue
  );
  return (
    <Block>
      <Text>STRENGTH</Text>
      <StrengthIndicator
        color={Color(strength)}
        value={strengthValue(strength)}
        strength={strength}
      />
    </Block>
  );
}

export default StrengthBlock;
