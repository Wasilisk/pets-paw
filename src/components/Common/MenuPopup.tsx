import React, {useState} from 'react';
import {Portal} from "./Portal";
import styled from "styled-components";
import {ReactComponent as CloseIcon} from "../../assets/icons/close.svg";
import {IconButton} from "../Buttons";
import {ReactComponent as MenuIcon} from "../../assets/icons/menu.svg";
import {IconLink} from "./IconLink";
import {MainMenu} from "./MainMenu";

const MenuPopupContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #F8F8F7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    margin-bottom: 20px;
  }
  
  & > button:first-child {
    margin-left: auto;
  }
`;

export const MenuPopup = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <IconLink as="button" onClick={toggleHandler}>
                <MenuIcon/>
            </IconLink>
            {
                isOpen && <Portal>
                    <MenuPopupContainer onClick={toggleHandler}>
                        <IconButton variant="secondary" onClick={toggleHandler}>
                            <CloseIcon/>
                        </IconButton>
                        <MainMenu/>
                    </MenuPopupContainer>
                </Portal>
            }
        </>
    );
};