// radiobutton.tsx
import React, { FC } from "react";
import styled from "styled-components";

interface RadioButtonProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const RadioButtonContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  margin-bottom: 10px;
`;

const RadioButtonInput = styled.input`
  display: none;
`;

const RadioButtonCheckmark = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.checked ? "#007bff" : "#999")};
  background-color: ${(props) =>
    props.checked ? "#007bff" : "transparent"};
  margin-right: 10px;
`;

const RadioButtonLabel = styled.span``;

const RadioButton: FC<RadioButtonProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <RadioButtonContainer htmlFor={id} disabled={disabled}>
      <RadioButtonInput
        type="radio"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <RadioButtonCheckmark checked={checked} />
      <RadioButtonLabel>{label}</RadioButtonLabel>
    </RadioButtonContainer>
  );
};

export default RadioButton;
