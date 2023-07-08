import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label Component', () => {
  it('should be visible', () => {
    render(<Label>Label Text</Label>);
    const label = screen.getByText('Label Text');
    expect(label).toBeVisible();
  });

  it('should change background color when disabled', () => {
    render(<Label disabled>Label Text</Label>);
    const label = screen.getByText('Label Text');
    expect(label).toHaveStyle('background-color: #f2f2f2');
  });
});
