/*node-modules*/
import React, {useState} from 'react';
import styled from 'styled-components';

/*components*/
import {VotingDislikeButton, VotingFavouriteButton, VotingLikeButton} from './Buttons/VotingButtons';

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
  top: calc(100% - 40px);
`;

type VotingButtonGroupProps = {
    imageId: string | null,
}

const VotingButtonGroup = ({imageId}: VotingButtonGroupProps) => {
    const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

    return (
        <VotingButtonGroupContainer>
            <VotingLikeButton
                imageId={imageId}
                isClicked={isButtonClicked}
                setIsClicked={setIsButtonClicked}
            />
            <VotingFavouriteButton
                imageId={imageId}
                isClicked={isButtonClicked}
                setIsClicked={setIsButtonClicked}
            />
            <VotingDislikeButton
                imageId={imageId}
                isClicked={isButtonClicked}
                setIsClicked={setIsButtonClicked}
            />
        </VotingButtonGroupContainer>
    );
};

export default VotingButtonGroup;