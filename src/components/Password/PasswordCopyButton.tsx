import styled from "styled-components";
import { ReactComponent as CopySVG } from "../../assets/copy.svg";

const CopyButton = styled(CopySVG)`
  fill: var(--color-NeonGreen);
  cursor: pointer;
  &:hover {
    fill: var(--color-White);
  }
`;

function PasswordCopyButton() {
  return <CopyButton />;
}

export default PasswordCopyButton;
