/*node-modules*/
import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';


/*components*/
import {Search} from './Search';
import {IconLink} from './IconLink';

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
    
    .active {
      background: #FF868E;

      path {
        fill: #FFFFFF;
      }
    }
  }
`

export const Navbar = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState<string>("");

    const onSubmit = () => {
        if(searchValue.length > 0) {
            navigate(`search?breed_name=${searchValue}`);
        } else {
            navigate("breeds");
        }
    }

    return (
        <NavbarContainer>
            <Search
                placeholder="Search for breeds by name"
                value={searchValue}
                changeHandler={setSearchValue}
                onSubmit={onSubmit}
            />
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