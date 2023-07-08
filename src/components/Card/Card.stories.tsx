import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story = (args) => <Card {...args}>Card Content</Card>;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
