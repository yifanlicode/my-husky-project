import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text from './Text';
import TextProps from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  disabled: true,
};
export const Custom = Template.bind({});
Custom.args = {
  children: 'Text',
  disabled: false,
};
