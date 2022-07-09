import styled from 'styled-components';

export const PaginationButton = styled.button`
  width: 122px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  background: #FBE0DC;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #FF868E;
  text-transform: uppercase;
  
  &:hover {
    background: #F8F8F7;
    color: #8C8C8C;
    
    path {
      fill: #8C8C8C;
    }
  }
  
  &:active {
    background: #FF868E;
    color: #FFFFFF;

    path {
      fill: #FFFFFF;
    }
  }
  
  &:disabled {
    background: #F8F8F7;
    color: #8C8C8C;
    border: 2px dashed #8C8C8C;

    path {
      fill: #8C8C8C;
    }
  }
`