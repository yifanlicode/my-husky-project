import React from 'react';
import { Meta, Story } from '@storybook/react';
import Img from './Img';
import ImgProps from './Img.types';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'Img.jpg',
  alt: 'Img Alt Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'Img.jpg',
  alt: 'Img Alt Text',
  disabled: true,
};
