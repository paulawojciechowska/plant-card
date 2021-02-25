import React from 'react';
import Button from './Button';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button>enter</Button>;


const Template = (args) => <Button {...args}>add new plant</Button>;
export const Big = Template.bind({});

Big.args = {
    big: true,
  };