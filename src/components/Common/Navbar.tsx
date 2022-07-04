/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*components*/
import {IconLink} from './IconLink';
import Search from './Search';

/*icons*/
import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg';
import { ReactComponent as FavouriteIcon } from '../../assets/icons/favourite.svg';
import { ReactComponent as DislikeIcon } from '../../assets/icons/dislike.svg';


const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  .links-group {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <Search/>
            <div className="links-group">
                <IconLink to="/likes">
                    <LikeIcon/>
                </IconLink>
                <IconLink to="/favourites">
                    <FavouriteIcon/>
                </IconLink>
                <IconLink to="/dislikes">
                    <DislikeIcon/>
                </IconLink>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;