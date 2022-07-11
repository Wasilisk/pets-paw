/*node-modules*/
import React, {useState} from 'react';
import styled from 'styled-components';

/*components*/
import {OverlayingPopup} from '../Common';
import {UploadImageSection} from '../Sections';

/*icons*/
import {ReactComponent as UploadIcon} from '../../assets/icons/upload.svg';

const UploadElement = styled.button`
  width: 143px;
  height: 40px;
  background: #FBE0DC;
  color: #FF868E;
  border-radius: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border: none;
  cursor: pointer;

  svg {
    margin-right: 10px;

    path {
      transition: all 0.2s;
      fill: #FF868E;
    }
  }

  &:hover {
    background: #FF868E;
    color: #FFFFFF;

    path {
      fill: #FFFFFF;
    }
  }
`;

export const UploadPopupButton = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

    const onPopupClose = () => setIsPopupOpen(false);
    const onPopupOpen = () => setIsPopupOpen(true);

    return (
        <>
            <UploadElement onClick={onPopupOpen}>
                <UploadIcon/>
                Upload
            </UploadElement>
            <OverlayingPopup onClose={onPopupClose} isOpen={isPopupOpen}>
                <UploadImageSection onClose={onPopupClose}/>
            </OverlayingPopup>
        </>
    );
};