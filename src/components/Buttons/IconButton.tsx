/*node-modules*/
import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

type IconButtonElementProps = {
    variant: "primary" | "secondary",
}

type IconButtonProps = IconButtonElementProps & {children?: React.ReactNode};

const IconButtonElement = styled.button<IconButtonElementProps>`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({variant}) => variant === "primary" ? "#FBE0DC" : "#FFFFFF"};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
  
  &:hover {
    background: #FF868E;

    path {
      fill: #FFFFFF;
    }
  }
`

export const IconButton = ({variant, children}: IconButtonProps) => {
    const navigate = useNavigate();
    const historyBack = () => navigate(-1);

    return (
        <IconButtonElement variant={variant} onClick={historyBack}>
            {children}
        </IconButtonElement>
    );
};