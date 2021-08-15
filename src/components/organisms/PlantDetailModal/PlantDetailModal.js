 import React from 'react';
 import ReactDOM from 'react-dom';
 import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Icon from 'assets/icons/exit.svg';
import { ModalWrapper} from './PlantDetailModal.styles';

 const modalContainer = document.getElementById('modal-container');

 const PlantDetailModal = ({ handleClose }) => {
     const modalNode = document.createElement('div');
     React.useEffect(() => {
         modalContainer.appendChild(modalNode);

         return () => {
             modalContainer.removeChild(modalNode);
         }
     }, [modalNode]);
    return ReactDOM.createPortal(<ModalWrapper><ButtonIcon exit icon={Icon} onClick={handleClose}/><div>This is detail modal</div></ModalWrapper>, modalNode);
 };

 export default PlantDetailModal;