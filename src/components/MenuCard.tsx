import styled from 'styled-components';

type MenuCardProps = {
    readonly backgroundColor: string
}

export const MenuCard = styled.div<MenuCardProps>`
  box-sizing: border-box;
  width: 138px;
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({backgroundColor}) => backgroundColor};
  border: 4px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  transition: all 0.2s;

  &:hover {
    border: 4px solid #FFFFFF;
  }

  &:active {
    border: 4px solid #FBE0DC;
  }
`;