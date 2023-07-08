import React from 'react';
import { Meta, Story } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story = (args) => <Label {...args}>Card Content</Label>;

export const Default = Template.bind({});
Default.args = {
  children: 'Label Text',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Label Text',
  disabled: true,
};
