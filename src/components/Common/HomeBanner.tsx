/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*image*/
import MainBanner from '../../assets/images/main-banner.png'

const HomeBannerContainer = styled.div`
  width: 680px;
  height: 840px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FBE0DC;
  border-radius: 20px;
  margin-right: 18px;
  margin-top: 10px;

  @media (max-width: 1440px) {
    display: none;
  }
`

export const HomeBanner = () => {
    return (
        <HomeBannerContainer>
            <img src={MainBanner} alt="Main banner"/>
        </HomeBannerContainer>
    );
};