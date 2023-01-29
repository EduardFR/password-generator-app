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

  const passwordStrength =
    (chracterTypes.upper.value ? 1 : 0) +
    (chracterTypes.lower.value ? 1 : 0) +
    (chracterTypes.numbers.value ? 1 : 0) +
    (chracterTypes.symbols.value ? 2 : 0) +
    (sliderValue < 10 ? 2 : 0) +
    (sliderValue >= 10 && sliderValue < 15 ? 4 : 0) +
    (sliderValue >= 15 && sliderValue <= 20 ? 6 : 0);
  const strengthValue =
    (passwordStrength === 3 ? "TOO WEAK!" : "") ||
    (passwordStrength > 3 && passwordStrength <= 6 ? "WEAK" : "") ||
    (passwordStrength > 6 && passwordStrength <= 9 ? "MEDIUM" : "") ||
    (passwordStrength > 9 && passwordStrength <= 11 ? "STRONG" : "");
  const Color =
    (passwordStrength === 3 ? "var(--color-Red)" : "") ||
    (passwordStrength > 3 && passwordStrength <= 6
      ? "var(--color-Orange)"
      : "") ||
    (passwordStrength > 6 && passwordStrength <= 9
      ? "var(--color-Yellow)"
      : "") ||
    (passwordStrength > 9 && passwordStrength <= 11
      ? "var(--color-NeonGreen)"
      : "");
  return (
    <Block>
      <Text>STRENGTH</Text>
      <StrengthIndicator
        color={Color}
        value={strengthValue}
        strength={passwordStrength}
      />
    </Block>
  );
}

export default StrengthBlock;
