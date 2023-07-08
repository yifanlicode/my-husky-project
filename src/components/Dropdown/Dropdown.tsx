import React from "react";
import styled from "styled-components";

interface DropdownProps {
  options: string[];
  onSelectOption: (option: string) => void;
  defaultValue?: string;
  disabled?: boolean;
}

const StyledDropdown = styled.select<DropdownProps>`
  padding: 8px;
  font-size: 14px;
  color: ${(props) => (props.disabled ? "#999999" : "#333333")};
  border: 1px solid ${(props) => (props.disabled ? "#999999" : "#333333")};
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#ffffff")};
  outline: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelectOption,
  defaultValue,
  disabled,
}) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    onSelectOption(selectedOption);
  };

  return (
    <StyledDropdown
      options={options}
      onSelectOption={onSelectOption}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={handleOptionChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
