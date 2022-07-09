/*node-modules*/
import React from 'react';
import styled from 'styled-components';

type IconButtonElementProps = {
    variant: "primary" | "secondary",
    onClick: () => void;
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

export const IconButton = ({variant, children, onClick}: IconButtonProps) => {
    return (
        <IconButtonElement variant={variant} onClick={onClick}>
            {children}
        </IconButtonElement>
    );
};