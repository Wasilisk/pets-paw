/*node-modules*/
import React, {useState} from 'react';
import styled from 'styled-components';

/*components*/
import {IconButton} from '../../Buttons';
import {VotingAction} from '../../Buttons/VotingButtons';

/*services*/
import {FavouritesService} from '../../../services/FavouritesService';

/*store*/
import {addActionLog} from '../../../store/slices/logs-slice';

/*hooks*/
import {useAppDispatch} from '../../../hooks';

/*models*/
import {Image} from '../../../models/common';

/*icons*/
import {ReactComponent as FavouriteFilledIcon} from '../../../assets/icons/favourite-filled.svg';
import {ReactComponent as FavouriteIcon} from '../../../assets/icons/favourite.svg';

type GalleryImageGridItemProps = {
    image: Image
}

const GalleryGridItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #C4C4C4;
  border-radius: 20px;
  position: relative;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }

  img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(255, 134, 142, 0.6);
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const GalleryImageGridItem = ({image}: GalleryImageGridItemProps) => {
    const dispatch = useAppDispatch();
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const [favouriteId, setFavouriteId] = useState<number | null>(null);

    const addToFavourites = async () => {
        const addToFavouriteAction: VotingAction = {
            type: 'add',
            category: 'Favourites',
            image_id: image.id,
        }
        setIsFavourite(true);
        const newFavourite = await FavouritesService.saveAsFavourite({
            image_id: image.id,
            sub_id: localStorage.getItem('sub_id')!,
        })
        setFavouriteId(newFavourite.data.id);
        dispatch(addActionLog(addToFavouriteAction));
    }

    const removeFromFavourite = async () => {
        const removeFromFavouriteAction: VotingAction = {
            type: 'remove',
            category: 'Favourites',
            image_id: image.id,
        }
        setIsFavourite(false);
        await FavouritesService.deleteFromFavourite(favouriteId!)
        dispatch(addActionLog(removeFromFavouriteAction));
    }

    const favouriteButtonHandler = () => {
        isFavourite
            ? removeFromFavourite()
            : addToFavourites()
    }

    return (
        <GalleryGridItemContainer>
            {
                image?.url
                    ? <img src={image.url} alt="Cat"/>
                    : <p>Image unavailable</p>
            }
            <div className="overlay">
                <IconButton variant="secondary" onClick={favouriteButtonHandler}>
                    {
                        isFavourite
                            ? <FavouriteFilledIcon/>
                            : <FavouriteIcon/>
                    }
                </IconButton>
            </div>
        </GalleryGridItemContainer>
    );
};