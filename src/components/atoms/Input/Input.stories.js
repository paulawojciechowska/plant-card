import React from 'react';
import Input from './Input';

// This default export determines where your story goes in the story list
export default {
  title: 'Input',
  component: Input,
};

export const Login = () => <Input placeholder="login"/>;
export const Password = () => <Input placeholder="password"/>;
