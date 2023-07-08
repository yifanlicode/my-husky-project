import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    text: { control: 'text' },
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  primary: false,
  disabled: true,
};
