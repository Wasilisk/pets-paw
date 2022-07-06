import styled from "styled-components";

type SortButtonProps = {
    isActive: boolean
}

export const SortButton = styled.button<SortButtonProps>`
  width: 40px;
  height: 40px;
  background: #F8F8F7;
  border-radius: 10px;
  border: ${({isActive}) => isActive ? "2px solid #FBE0DC" : "none"};

  path {
    fill: ${({isActive}) => isActive && "#FF868E"};
  }
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    border: 2px solid #FBE0DC;
    
    path {
      fill: #FF868E;
    }
  }
`