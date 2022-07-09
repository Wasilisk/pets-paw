/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*components*/
import {IconButton} from '../../Buttons';

/*store*/
import {addActionLog} from '../../../store/slices/logs-slice';
import {removeFromFavourite} from '../../../store/slices/categories-slice';

/*services*/
import {FavouritesService} from '../../../services/FavouritesService';

/*models*/
import {Favourite} from '../../../models/common';

/*hooks*/
import {useAppDispatch} from '../../../hooks';


/*icons*/
import {ReactComponent as FavouriteFilledIcon} from '../../../assets/icons/favourite-filled.svg';
type FavouriteImageGridItemProps = {
    favourite: Favourite
}

const FavouriteItemContainer = styled.div`
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
  }
`;

export const FavouriteImageGridItem = ({favourite}: FavouriteImageGridItemProps) => {
    const dispatch = useAppDispatch();

    const onClickHandler = async () => {
        await FavouritesService.deleteFromFavourite(favourite.id);
        dispatch(removeFromFavourite(favourite.id))
        dispatch(addActionLog({
            type: 'remove',
                category: 'Favourites',
                image_id: favourite.image_id,
        }));
    }

    return (
        <FavouriteItemContainer>
            {
                favourite.image?.url
                    ? <img src={favourite.image.url} alt="Cat"/>
                    : <p>Image unavailable</p>
            }
                <div className="overlay">
                    <IconButton variant="secondary" onClick={onClickHandler}>
                        <FavouriteFilledIcon/>
                    </IconButton>
                </div>
        </FavouriteItemContainer>
    );
};