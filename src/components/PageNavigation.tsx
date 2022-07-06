/*node-modules*/
import React, {ReactNode} from 'react';
import styled from "styled-components";

/*components*/
import {IconButton} from "./Buttons/IconButton";
import {PathLabels} from "./Common/Labels";

/*icons*/
import {ReactComponent as BackArrow} from "../assets/icons/back-arrow.svg";

const PageNavigationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`

type PageNavigationProps = {
    children?: ReactNode
}

const PageNavigation = ({children}: PageNavigationProps) => {
    return (
        <PageNavigationContainer>
            <IconButton variant="primary">
                <BackArrow/>
            </IconButton>
            <PathLabels/>
            {children}
        </PageNavigationContainer>
    );
};

export default PageNavigation;