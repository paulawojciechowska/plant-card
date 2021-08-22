import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Icon from 'assets/icons/leaves.svg';
import { StyledDiv, StyledHeading } from './ButtonAdd.styled';

const ButtonAdd = ({ openModal }) => (
  <StyledDiv onClick={openModal}>
    <StyledHeading>Add new plant</StyledHeading>
    <ButtonIcon icon={Icon} />
  </StyledDiv>
);
ButtonAdd.propTypes = {
  openModal: PropTypes.func.isRequired,
};
export default ButtonAdd;
