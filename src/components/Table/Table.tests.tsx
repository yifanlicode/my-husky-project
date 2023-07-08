import React from 'react';
import { render, screen } from '@testing-library/react';
import Table, { TableHeader, TableCell, TableRow, TableFooter } from './Table';

describe('Table', () => {
  test('renders table component', () => {
    render(
      <Table>
        <TableHeader>Header 1</TableHeader>
        <TableRow>
          <TableCell>Cell</TableCell>
        </TableRow>
        <TableFooter>Footer 2</TableFooter>
      </Table>,
    );

    const headerElement = screen.getByText(/Header 1/i);
    const cellElement = screen.getByText(/Cell/i);
    const footerElement = screen.getByText(/Footer 2/i);

    expect(headerElement).toBeInTheDocument();
    expect(cellElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(
      <Table disabled>
        <TableHeader disabled>Header 1</TableHeader>
        <TableRow disabled>
          <TableCell disabled>Cell</TableCell>
        </TableRow>
        <TableFooter disabled>Footer 2</TableFooter>
      </Table>,
    );

    const headerElement = screen.getByText(/Header 1/i);
    const cellElement = screen.getByText(/Cell/i);
    const footerElement = screen.getByText(/Footer 2/i);

    expect(headerElement).toHaveStyle('background-color: #f2f2f2');
    expect(cellElement).toHaveStyle('background-color: #f2f2f2');
    expect(footerElement).toHaveStyle('background-color: #f2f2f2');
  });
});
