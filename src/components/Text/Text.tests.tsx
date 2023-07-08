import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  test('renders text component', () => {
    render(<Text>Test Text</Text>);
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(<Text disabled>Disabled Text</Text>);
    const textElement = screen.getByText(/Disabled Text/i);
    expect(textElement).toHaveStyle('background-color: #f2f2f2');
  });
});
