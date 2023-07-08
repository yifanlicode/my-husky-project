import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

interface StyledButtonProps extends ButtonProps {
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  primary = false,
  disabled = false,
  text = "Button",
  onClick,
}) => {
  const defaultTextColor = "#333333";
  const defaultBackgroundColor = "#f2f2f2";
  const primaryTextColor = "#ffffff";
  const primaryBackgroundColor = "#7bbcf8";
  const hoverBackgroundColor = "#55bd90";
  const activeBorderColor = "#1b116e";

  const StyledButton = styled.button<StyledButtonProps>`
    border: 0;
    line-height: 1;
    font-size: 16px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    display: inline-block;
    padding: ${(props) =>
      props.size === "small"
        ? "8px 20px"
        : props.size === "large"
        ? "14px 30px"
        : "10px 24px"};
    color: ${(props) => (props.primary ? primaryTextColor : defaultTextColor)};
    background-color: ${(props) =>
      props.primary ? primaryBackgroundColor : defaultBackgroundColor};
    transition: background-color 0.3s ease;

    ${(props) =>
      props.disabled &&
      css`
        opacity: 0.6;
        cursor: not-allowed;
      `}

    &:hover {
      background-color: ${(props) =>
        props.primary ? hoverBackgroundColor : "#e6e6e6"};
    }

    &:active {
      border: solid 2px ${activeBorderColor};
      padding: ${(props) =>
        props.size === "small"
          ? "6px 18px"
          : props.size === "large"
          ? "12px 26px"
          : "8px 22px"};
    }
  `;

  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
