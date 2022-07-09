/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*store*/
import {addActionLog} from '../../../store/slices/logs-slice';
import {getVotingImage} from '../../../store/slices/voting-slice';

/*services*/
import {VotingService} from '../../../services/VotingService';

/*hooks*/
import {useAppDispatch} from '../../../hooks';

/*components*/
import {VotingAction, VotingButton, VotingButtonProps} from './VotingButton';

/*icons*/
import {ReactComponent as DislikeIcon} from '../../../assets/icons/dislike.svg';

const VotingDislikeButtonElement = styled(VotingButton)`
  background: #FFD280;
  border-radius: 0 20px 20px 0;

  &:hover {
    background: rgba(255, 210, 128, 0.5);

    path {
      fill: #FFD280;
    }
  }

  &:active {
    background: #FFD280;

    path {
      fill: #FFFFFF;
    }
  }
`;

type VotingDislikeButtonProps = VotingButtonProps & {setIsFavourite: (arg: boolean) => void}

export const VotingDislikeButton = ({isClicked, imageId, setIsClicked, setIsFavourite}: VotingDislikeButtonProps) => {
    const dispatch = useAppDispatch();

    const addToLikes = async () => {
        const likeAction: VotingAction = {
            type: 'add',
            category: 'Dislikes',
            image_id: imageId!,
        }

        setIsClicked(true);
        await VotingService.createVote({
            image_id: imageId!,
            sub_id: localStorage.getItem('sub_id')!,
            value: 0
        })
        dispatch(addActionLog(likeAction));
        dispatch(getVotingImage());
        setIsFavourite(false);
        setIsClicked(false);
    }

    return (
        <VotingDislikeButtonElement onClick={addToLikes} disabled={isClicked}>
            <DislikeIcon/>
        </VotingDislikeButtonElement>
    );
};