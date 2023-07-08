import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table, { TableHeader, TableCell, TableRow, TableFooter } from './Table';
import { TableProps } from './Table.types';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHeader {...args}>
      <TableRow {...args}>
        <TableCell {...args}>Table</TableCell>
      </TableRow>
    </TableHeader>
    <TableFooter {...args}>
      <TableRow {...args}>
        <TableCell {...args}>Table</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
