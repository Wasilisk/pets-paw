/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*icons*/
import {ReactComponent as LikeIcon} from '../assets/icons/like.svg';
import {ReactComponent as FavouriteIcon} from '../assets/icons/favourite.svg';
import {ReactComponent as DislikeIcon} from '../assets/icons/dislike.svg';

/*models*/
import {Action} from "../models/common/action";

const ActionLogContainer = styled.div`
  width: 100%;
  min-height: 60px;
  padding: 0 25px;
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
`;

type ActionLogProps = {
    actionInfo: Action;
}

const ActionLog = ({actionInfo}: ActionLogProps) => {
    const {
        created_at,
        image_id,
        type,
        category
    } = actionInfo

    const actionTime = new Date(created_at);

    return (
        <ActionLogContainer>
            <p className="action-time">
                {actionTime.getHours()}:
                {actionTime.getMinutes()}
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

export default ActionLog;