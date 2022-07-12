/*node-modules*/
import React, {useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useLocation} from "react-router-dom";


/*components*/
import {MainContainer, MainSection} from '../Sections';
import {Navbar} from './index';

/*router*/
import AppRouter from '../../routes/AppRouter';

/*hooks*/
import {useMediaQuery} from '../../hooks';

const LayoutContainer = styled.div`
  height: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;

  .variable-section {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 680px;
  }

  @media (max-width: 1440px) {
    justify-content: center;
    
    ${MainContainer} {
      display: none;
    }
    
    .variable-section {
      display: flex;
      flex-direction: column;
      max-width: 700px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const Layout = () => {
    const location = useLocation()
    const isMobile = useMediaQuery("(max-width: 1440px)");
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        localStorage.setItem("sub_id", res.data.IPv4);
    }

    const isHomePage = location.pathname === "/";

    useEffect(() => {
        getData()
    }, [])

    if(isHomePage && isMobile) {
        return <MainSection/>
    }

    return (
        <LayoutContainer>
            <MainSection/>
            <div className="variable-section">
                {
                    !isHomePage && <Navbar/>
                }
                <AppRouter/>
            </div>
        </LayoutContainer>
    );
};