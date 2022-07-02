import React from 'react';
import styled from "styled-components";
import MainSection from "./MainSection";
import AppRouter from "../routes/AppRouter";

const LayoutContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`

const Layout = () => {
    return (
        <LayoutContainer>
            <MainSection/>
            <AppRouter/>
        </LayoutContainer>
    );
};

export default Layout;