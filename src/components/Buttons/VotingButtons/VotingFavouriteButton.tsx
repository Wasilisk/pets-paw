/*node-modules*/
import React, {useState} from 'react';
import styled from 'styled-components';

/*services*/
import {VotingService} from '../../../services/VotingService';

/*hooks*/
import {useAppDispatch} from '../../../hooks/AppDispatch';

/*store*/
import {addActionLog} from '../../../store/slices/logs-slice';


/*components*/
import {VotingAction, VotingButton, VotingButtonProps} from './VotingButton';

/*icons*/
import {ReactComponent as FavouriteFilledIcon} from '../../../assets/icons/favourite-filled.svg';
import {ReactComponent as FavouriteIcon} from '../../../assets/icons/favourite.svg';


const VotingFavouriteButtonElement = styled(VotingButton)`
  background: #FF868E;
  margin: 0 4px 0 4px;

  svg {
    width: 30px;
    height: 26px;
  }

  &:hover {
    background: rgba(255, 134, 142, 0.3);

    path {
      fill: #FF868E;
    }
  }

  &:active {
    background: #FF868E;

    path {
      fill: #FFFFFF;
    }
  }
`


export const VotingFavouriteButton = ({isClicked, imageId, setIsClicked}: VotingButtonProps) => {
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const [favouriteId, setFavouriteId] = useState<number | null>(null);

    const dispatch = useAppDispatch();

    const addToFavourites = async () => {
        const addToFavouriteAction: VotingAction = {
            type: 'add',
            category: 'Favourites',
            image_id: imageId!,
        }

        setIsClicked(true);
        const newFavourite = await VotingService.saveAsFavourite({
            image_id: imageId!,
            sub_id: localStorage.getItem('sub_id')!,
        })
        setIsFavourite(true);
        setFavouriteId(newFavourite.data.id);
        dispatch(addActionLog(addToFavouriteAction));
        setIsClicked(false);
    }

    const removeFromFavourite = async () => {
        const removeFromFavouriteAction: VotingAction = {
            type: 'remove',
            category: 'Favourites',
            image_id: imageId!,
        }

        setIsClicked(true);
        await VotingService.deleteFromFavourite(favouriteId!)
        setIsFavourite(false);
        dispatch(addActionLog(removeFromFavouriteAction));
        setIsClicked(false);
    }

    const favouriteButtonHandler = () => {
        isFavourite
            ? removeFromFavourite()
            : addToFavourites()
    }

    return (
        <VotingFavouriteButtonElement onClick={favouriteButtonHandler} disabled={isClicked}>
            {
                isFavourite
                    ? <FavouriteFilledIcon/>
                    : <FavouriteIcon/>
            }
        </VotingFavouriteButtonElement>
    );
};
