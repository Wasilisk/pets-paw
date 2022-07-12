/*node-modules*/
import React, {ReactNode} from 'react';
import styled from 'styled-components';

/*components*/
import {PathLabels} from '../Labels';
import {HistoryBackButton} from '../Buttons';
import {SelectElement} from './Select';

const PageNavigationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & *:not(:last-child) {
    margin-right: 10px;
  }
  
  & > div {
    display: flex;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > *:nth-child(2) {
      margin: 10px 0;
      width: 100%;
    }
    
    & > *:last-child {
      margin-bottom: 0;
    }
    
    ${SelectElement} {
      width: 100%;
    }
  }
`

type PageNavigationProps = {
    children?: ReactNode
}

export const PageNavigation = ({children}: PageNavigationProps) => {
    return (
        <PageNavigationContainer>
            <div>
                <HistoryBackButton/>
                <PathLabels/>
            </div>
            {children}
        </PageNavigationContainer>
    );
};