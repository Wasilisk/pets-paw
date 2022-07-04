/*node-modules*/
import React, {useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

/*components*/
import {MainSection} from './Sections';
import AppRouter from '../routes/AppRouter';
import Navbar from './Common/Navbar';

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

const Layout = () => {
    const getData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        localStorage.setItem("sub_id", res.data.IPv4);
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <LayoutContainer>
            <MainSection/>
            <div className="variable-section">
                <Navbar/>
                <AppRouter/>
            </div>
        </LayoutContainer>
    );
};

export default Layout;