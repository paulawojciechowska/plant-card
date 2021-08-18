import React from 'react';
import { Label, Text, StyledInput } from './AddFile.styles';

const AddFile = () => (
  <Label>
    <Text>upload photo</Text>
    <StyledInput type="file" placeholder="file" />
  </Label>
);

export default AddFile;
