/*node-modules*/
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const IconLink = styled(NavLink)`
  width: 60px;
  height: 60px;
  background: #FFFFFF;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all;
  
  &:hover {
    background: #FBE0DC;
  }
  
  &:active {
    background: #FF868E;
    
    path {
      fill: #FFFFFF;
    }
  }
  
  .active {
    background: #FF868E;

    path {
      fill: #FFFFFF;
    }
  }
`;