/*node-modules*/
import React, {ReactNode} from 'react';
import styled from 'styled-components';

/*components*/
import {PathLabels} from '../Labels';
import {HistoryBackButton} from '../Buttons';

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

export const PageNavigation = ({children}: PageNavigationProps) => {
    return (
        <PageNavigationContainer>
            <HistoryBackButton/>
            <PathLabels/>
            {children}
        </PageNavigationContainer>
    );
};