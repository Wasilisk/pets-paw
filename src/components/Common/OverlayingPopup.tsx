/*node-modules*/
import React, {ReactNode} from 'react';
import styled from 'styled-components';

/*components*/
import {Portal} from './Portal';

const OverlayingPopupContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px;

  & > *:nth-child(2) {
    z-index: 1;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

type OverlayingPopupProps = {
    children: ReactNode,
    onClose: () => void,
    isOpen: boolean
}

export const OverlayingPopup = ({children, onClose, isOpen}: OverlayingPopupProps) => {
    if(!isOpen) {
        return null;
    }

    return (
        <Portal>
            <OverlayingPopupContainer>
                <div
                    className="overlay"
                    onClick={onClose}
                />
                {children}
            </OverlayingPopupContainer>
        </Portal>
    );
};