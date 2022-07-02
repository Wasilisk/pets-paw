import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {MenuCard} from "./MenuCard";
import {MenuButton} from "./MenuButton";
import VotingImage from '../../assets/images/vote-table.png';
import BreedsImage from '../../assets/images/pet-breeds.png';
import GalleryImage from '../../assets/images/images-search.png';


const MainMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .active {
    ${MenuCard} {
      border: 4px solid #FBE0DC;
    }

    ${MenuButton} {
      background: #FF868E;
      color: #FFFFFF;
    }
  }
`;

export const MainMenu = () => {
    return (
        <MainMenuContainer>
            <NavLink to="voting">
                <MenuCard backgroundColor="#B4B7FF">
                    <img src={VotingImage} alt="Voting"/>
                </MenuCard>
                <MenuButton>Voting</MenuButton>
            </NavLink>
            <NavLink to="breeds">
                <MenuCard backgroundColor="#97EAB9">
                    <img src={BreedsImage} alt="Breeds"/>
                </MenuCard>
                <MenuButton>Breeds</MenuButton>
            </NavLink>
            <NavLink to="gallery">
                <MenuCard backgroundColor="#FFD280">
                    <img src={GalleryImage} alt="Gallery"/>
                </MenuCard>
                <MenuButton>Gallery</MenuButton>
            </NavLink>
        </MainMenuContainer>
    );
};