/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*components*/
import {MainMenu} from '../Common';

/*icons*/
import {ReactComponent as Logo} from '../../assets/logo/Logo.svg'

export const MainContainer = styled.div`
  width: 446px;
  height: 544px;
  top: 10px;
  position: sticky;
  margin-left: 117px;

  .title {
    font-weight: 500;
    font-size: 44px;
    line-height: 58px;
    color: #1D1D1D;
    margin-top: 80px;
  }
  
  .description {
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #8C8C8C;
    margin-top: 10px;
    margin-bottom: 60px;
  }
  
  .menu_title {
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #1D1D1D;
    margin-bottom: 20px;
  }

  @media (max-width: 1440px) {
    width: auto;
    height: auto;
    padding: 20px;
    max-width: 446px;
    margin: 0 auto;
  }
`

export const MainSection = () => {
    return (
        <MainContainer>
            <Logo/>
            <h4 className="title">Hi intern!</h4>
            <p className="description">Welcome to MI 2022 Front-end test</p>
            <p className="menu_title">Lets start using The Cat API</p>
            <MainMenu/>
        </MainContainer>
    );
};