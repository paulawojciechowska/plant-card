import React, { useContext } from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';
import Icon from 'assets/icons/exit.svg';
import Left from 'assets/icons/left.svg';
import Right from 'assets/icons/right.svg';
import { ModalWrapper, StyledWrapper } from './ZoomPhoto.styles';
import { PlantContext } from 'providers/PlantProvider';

const ZoomPhoto = ({ handleClose, isOpen, plant }) => {
  const { nextPlant, prevPlant, setZoomPhoto, setPhotos } = useContext(PlantContext);
  const handleChangePhoto = (index) => {
    setZoomPhoto(index);
    setPhotos(index);
  };
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      <ButtonIcon exit icon={Icon} onClick={handleClose} />
      <StyledWrapper>
        {prevPlant !== null && <ButtonIcon arrowL icon={Left} onClick={() => handleChangePhoto(prevPlant)} />}
        <img src={plant} alt="img" />
        {nextPlant !== null && <ButtonIcon arrowR icon={Right} onClick={() => handleChangePhoto(nextPlant)} />}
      </StyledWrapper>
    </ModalWrapper>
  );
};
ZoomPhoto.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default ZoomPhoto;
