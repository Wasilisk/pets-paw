/*node-modules*/
import React, {useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useLocation} from "react-router-dom";


/*components*/
import {MainSection} from '../Sections';
import {Navbar} from './index';

/*router*/
import AppRouter from '../../routes/AppRouter';

const LayoutContainer = styled.div`
  height: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;

  .variable-section {
    height: 100%;
    width: 680px;
  }
`

export const Layout = () => {
    const location = useLocation()

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        localStorage.setItem("sub_id", res.data.IPv4);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <LayoutContainer>
            <MainSection/>
            <div className="variable-section">
                {
                    location.pathname === "/"
                        ? null
                        : <Navbar/>
                }
                <AppRouter/>
            </div>
        </LayoutContainer>
    );
};