import React from 'react';
import styled from 'styled-components';

interface TextProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

const StyledText = styled.span<TextProps>`
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? '#f2f2f2' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
`;


const Text: React.FC<TextProps> = ({ children, disabled }) => {
  return <StyledText disabled={disabled}>{children}</StyledText>;
};

export default Text;
