import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
import DropdownProps from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelectOption: (option: string) => {
    console.log('Selected option:', option);
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelectOption: (option: string) => {
    console.log('Selected option:', option);
  },
  disabled: true,
};
