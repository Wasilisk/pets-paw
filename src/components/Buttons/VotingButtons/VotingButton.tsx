/*node-modules*/
import styled from 'styled-components';

/*models*/
import {Action} from '../../../models/common';

export type VotingAction = Omit<Action, "created_at" | "id">;

export type VotingButtonProps = {
    imageId: string | null,
    isClicked: boolean,
    setIsClicked: (arg: boolean) => void
}

export const VotingButton = styled.button`
  height: 100%;
  width: 80px;
  border: none;
  transition: 0.2s ease; 
  cursor: pointer;

  path {
    fill: #FFFFFF;
  }
`;