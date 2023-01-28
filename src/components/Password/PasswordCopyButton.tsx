import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CopySVG } from "../../assets/copy.svg";

const Block = styled.div`
  display: inline-flex;
  align-items: center;
  column-gap: 7px;
`;

const CopyButton = styled(CopySVG)`
  display: inline-block;
  fill: var(--color-NeonGreen);
  cursor: pointer;
  &:hover {
    fill: var(--color-White);
  }
`;

const CopyText = styled.p`
  display: inline-block;
  visibility: hidden;
  color: var(--color-NeonGreen);
  &.hidden {
    visibility: visible;
  }
`;

interface PasswordCopyButtonType {
  value: string;
}

function PasswordCopyButton({ value }: PasswordCopyButtonType) {
  const [copyTextClass, setCopyTextClass] = useState("");

  const onClick = () => {
    navigator.clipboard.writeText(value);

    setCopyTextClass("hidden");
    setTimeout(() => {
      setCopyTextClass("");
    }, 3000);
  };

  return (
    <Block>
      <CopyText className={copyTextClass}>COPIED</CopyText>
      <CopyButton onClick={() => onClick()} />
    </Block>
  );
}

export default PasswordCopyButton;
