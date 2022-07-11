/*node-modules*/
import React from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';

const PathLabel = styled.div`
  width: auto;
  padding: 5px 30px;
  background: #FBE0DC;
  border-radius: 10px;
  color: #FF868E;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  
  &:not(:last-child) {
    margin-right: 10px;
  }
`

const PathLabelsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  
  ${PathLabel}:last-child {
    color: #FFFFFF;
    background: #FF868E;
  }
`;

export const PathLabels = () => {
    const  location = useLocation();
    const locationValues = location.pathname.substring(1).split("/");
    return (
        <PathLabelsContainer>
            {
                locationValues.map((value, index) => <PathLabel key={index}>{value}</PathLabel>)
            }
        </PathLabelsContainer>
    );
};