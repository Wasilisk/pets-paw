/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*icons*/
import {ReactComponent as LoadingIcon} from '../../assets/icons/loading.svg';

export const ButtonWithLoadingElement = styled.button<UploadButtonProps>`
  width: 172px;
  height: 40px;
  border-radius: 10px;

  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: #FF868E;
  color: #FFFFFF;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  
  svg {
    margin: 0 10px 0 0!important;
  }

  &:hover {
    background: ${({isLoading}) => isLoading ? "#FF868E" : "#FBE0DC"};
    color: ${({isLoading}) => isLoading ? "#FFFFFF" : "#FF868E"};
  }
`

type UploadButtonProps = {
    isLoading: boolean,
    onClick: () => void;
}

export const UploadButton = ({isLoading, onClick}: UploadButtonProps) => {
    return (
        <ButtonWithLoadingElement isLoading={isLoading} onClick={onClick}>
            {isLoading && <LoadingIcon/>}
            {
                isLoading
                ? "Uploading"
                : "Upload photo"
            }
        </ButtonWithLoadingElement>
    );
};
