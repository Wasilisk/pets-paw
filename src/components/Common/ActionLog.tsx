/*node-modules*/
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

/*icons*/
import {ReactComponent as LikeIcon} from '../../assets/icons/like.svg';
import {ReactComponent as FavouriteIcon} from '../../assets/icons/favourite.svg';
import {ReactComponent as DislikeIcon} from '../../assets/icons/dislike.svg';

/*models*/
import {Action} from '../../models/common';

const ActionLogContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  background: #F8F8F7;
  border-radius: 10px;
  display: flex;
  align-items: center;
  
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .action-time {
    width: 61px;
    height: 30px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .action-description {
    width: auto;
    margin: 0 20px 0 20px;
    flex-grow: 1;
  }
  
  .icon {
    height: 20px;
    width: 20px;
    
    svg {
      height: 20px;
      width: 20px;
    }
  }
  
  .likes {
    path {
      fill: #97EAB9;
    }
  }
  
  .dislikes {
    path {
      fill: #FFD280;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
    
    .action-description {
      order: 2;
      flex: 100%;
      margin: 10px 0 0 0;
    }
  }
`;

type ActionLogProps = {
    actionInfo: Action;
}

export const ActionLog = ({actionInfo}: ActionLogProps) => {
    const {
        created_at,
        image_id,
        type,
        category
    } = actionInfo

    const actionTime = moment(created_at).format("HH:MM");

    return (
        <ActionLogContainer>
            <p className="action-time">
                {actionTime}
            </p>
            <p className="action-description">
                Image ID: <strong>{image_id}</strong> was
                {
                    type === "add"
                        ? " added to "
                        : " remove from "
                }
                {category}
            </p>
            <div className={category.toLowerCase() + " icon"}>
                {
                    type === "add" &&
                    {
                        'Likes': <LikeIcon/>,
                        'Favourites': <FavouriteIcon/>,
                        'Dislikes': <DislikeIcon/>
                    }[category]
                }
            </div>
        </ActionLogContainer>
    );
};