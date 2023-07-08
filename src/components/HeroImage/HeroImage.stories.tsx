import React from 'react';
import { Story, Meta } from '@storybook/react';
import  HeroImageProps from './HeroImage.types';
import HeroImage from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'image.jpg',
  alt: 'Image Alt Text',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'image.jpg',
  alt: 'Image Alt Text',
  disabled: true,
};
