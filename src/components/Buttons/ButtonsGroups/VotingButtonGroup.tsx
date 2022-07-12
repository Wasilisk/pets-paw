/*node-modules*/
import React, {useState} from 'react';
import styled from 'styled-components';

/*components*/
import {VotingDislikeButton, VotingFavouriteButton, VotingLikeButton} from '../VotingButtons';

const VotingButtonGroupContainer= styled.div`
  height: 80px;
  width: 248px;
  background: #FFFFFF;
  border-radius: 20px;
  border: 4px solid #FFFFFF;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  position: absolute;
  left: calc(50% - 124px);
  top: calc(100% - 92px);

  @media (max-width: 425px) {
    height: 60px;
    width: 186px;
    left: calc(50% - 96px);
    top: calc(100% - 40px);
    
    svg {
      height: 22px;
      width: 22px;
    }
  }
`;

type VotingButtonGroupProps = {
    imageId: string | null,
}

export const VotingButtonGroup = ({imageId}: VotingButtonGroupProps) => {
    const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    return (
        <VotingButtonGroupContainer>
            <VotingLikeButton
                imageId={imageId}
                isClicked={isButtonClicked}
                setIsClicked={setIsButtonClicked}
                setIsFavourite={setIsFavourite}
            />
            <VotingFavouriteButton
                imageId={imageId}
                isClicked={isButtonClicked}
                setIsClicked={setIsButtonClicked}
                isFavourite={isFavourite}
                setIsFavourite={setIsFavourite}
            />
            <VotingDislikeButton
                imageId={imageId}
                isClicked={isButtonClicked}
                setIsClicked={setIsButtonClicked}
                setIsFavourite={setIsFavourite}
            />
        </VotingButtonGroupContainer>
    );
};