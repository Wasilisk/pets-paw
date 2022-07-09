/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*services*/
import {VotingService} from '../../../services/VotingService';

/*store*/
import {addActionLog} from '../../../store/slices/logs-slice';
import {getVotingImage} from '../../../store/slices/voting-slice';

/*hooks*/
import {useAppDispatch} from '../../../hooks';

/*components*/
import {VotingAction, VotingButton, VotingButtonProps} from './VotingButton';

/*icons*/
import {ReactComponent as LikeIcon} from '../../../assets/icons/like.svg';

const VotingLikeButtonElement = styled(VotingButton)`
  background: #97EAB9;
  border-radius: 20px 0 0 20px;

  &:hover {
    background: rgba(151, 234, 185, 0.5);

    path {
      fill: #97EAB9;
    }
  }

  &:active {
    background: #97EAB9;

    path {
      fill: #FFFFFF;
    }
  }
`;

type VotingLikeButtonProps = VotingButtonProps & {setIsFavourite: (arg: boolean) => void}

export const VotingLikeButton = ({isClicked, imageId, setIsClicked, setIsFavourite}: VotingLikeButtonProps) => {
    const dispatch = useAppDispatch();

    const addToLikes = async() => {
        const likeAction: VotingAction = {
            type: 'add',
            category: 'Likes',
            image_id: imageId!,
        };

        setIsClicked(true);
        await VotingService.createVote({
            image_id: imageId!,
            sub_id: localStorage.getItem('sub_id')!,
            value: 1
        });
        dispatch(addActionLog(likeAction));
        dispatch(getVotingImage());
        setIsFavourite(false);
        setIsClicked(false);
    }

    return (
        <VotingLikeButtonElement onClick={addToLikes} disabled={isClicked}>
            <LikeIcon/>
        </VotingLikeButtonElement>
    );
};