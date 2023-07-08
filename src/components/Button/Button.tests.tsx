import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import { ButtonProps } from './Button.types';
import "jest-styled-components";

const testButton = (componentProps: ButtonProps) => {
    render(<Button {...componentProps} />);

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();

  if (componentProps.disabled) {
    expect(buttonElement).toHaveStyle('background-color: #f2f2f2');
    userEvent.click(buttonElement);
    expect(buttonElement).toBeDisabled();
  }
};

describe('Button', () => {
  it('renders the button', () => {
    testButton({});
  });

  it('changes background color when disabled', () => {
    testButton({ disabled: true });
  });
});
