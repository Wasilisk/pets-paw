import styled from 'styled-components';

export const MenuButton = styled.button`
  width: 138px;
  height: 36px;
  margin-top: 10px;

  background: #FFFFFF;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #FF868E;
  text-transform: uppercase;
  transition: 0.2s ease;

  &:hover {
    background: #FBE0DC;
  }

  &:active {
    background: #FF868E;
    color: #FFFFFF;
  }
`;