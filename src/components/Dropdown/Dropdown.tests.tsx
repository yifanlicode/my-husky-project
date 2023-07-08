import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const onSelectOption = jest.fn();

  it('should be visible', () => {
    const { getByRole } = render(
      <Dropdown options={options} onSelectOption={onSelectOption} />,
    );

    const dropdown = getByRole('combobox');
    expect(dropdown).toBeInTheDocument();
  });

  it('should change background color when disabled', () => {
    const { getByRole } = render(
      <Dropdown options={options} onSelectOption={onSelectOption} disabled />,
    );

    const dropdown = getByRole('combobox');
    expect(dropdown).toHaveStyle('background-color: #f2f2f2');
  });

  it('should call onSelectOption when an option is selected', () => {
    const { getByRole } = render(
      <Dropdown options={options} onSelectOption={onSelectOption} />,
    );

    const dropdown = getByRole('combobox');
    fireEvent.change(dropdown, { target: { value: 'Option 1' } });

    expect(onSelectOption).toHaveBeenCalledWith('Option 1');
  });
});
