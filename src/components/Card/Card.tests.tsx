import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<Card>Hello World!</Card>);
    const cardComponent = getByTestId('card-component');
    expect(cardComponent).toBeInTheDocument();
  });

  it('should change background color when disabled', () => {
    const { getByTestId } = render(
      <Card disabled data-testid="card-component">
        Hello World!
      </Card>,
    );
    const cardComponent = getByTestId('card-component');
    expect(cardComponent).toHaveStyle('background-color: #f2f2f2');
  });
});
