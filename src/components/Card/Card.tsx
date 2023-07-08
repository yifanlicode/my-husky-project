import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledCard = styled.div<CardProps>`
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: ${(props) => (props.disabled ? '#f2f2f2' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.6 : 0.8)};
  }
`;

const Card: React.FC<CardProps> = ({ children, disabled }) => {
  return <StyledCard disabled={disabled}>{children}</StyledCard>;
};

export default Card;
