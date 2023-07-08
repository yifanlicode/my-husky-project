import React from "react";
import styled from "styled-components";

interface LabelProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledLabel = styled.label<LabelProps>`
  font-size: 14px;
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.6 : 0.8)};
  }
`;

const Label: React.FC<LabelProps> = ({ children, disabled }) => {
  return <StyledLabel disabled={disabled}>{children}</StyledLabel>;
};

export default Label;
