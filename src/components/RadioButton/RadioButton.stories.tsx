// radiobutton.stories.tsx
import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template: Story<RadioButtonProps> = (args) => (
  <RadioButton {...args} onChange={action('onChange')} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'radio1',
  label: 'Option 1',
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'radio2',
  label: 'Option 2',
  checked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'radio3',
  label: 'Option 3',
  checked: false,
  disabled: true,
};
