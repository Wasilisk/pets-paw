/*node-modules*/
import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';


/*components*/
import {Search, SearchContainer} from './Search';
import {IconLink} from './IconLink';

/*icons*/
import {ReactComponent as LikeIcon} from '../../assets/icons/like.svg';
import {ReactComponent as FavouriteIcon} from '../../assets/icons/favourite.svg';
import {ReactComponent as DislikeIcon} from '../../assets/icons/dislike.svg';
import {useMediaQuery} from "../../hooks";
import {MenuPopup} from "./MenuPopup";

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-right: 10px;
  }

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

  @media (max-width: 768px) {
    flex-direction: row;
    
    ${SearchContainer} {
      order: 2;
      flex: 100%;
      margin-top: 10px;
      margin-right: 0;
    }
  }
`

export const Navbar = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState<string>("");
    const isLaptop = useMediaQuery(`(min-width: 1440px)`)

    const onSubmit = () => {
        if (searchValue.length > 0) {
            navigate(`search?breed_name=${searchValue}`);
        } else {
            navigate("breeds");
        }
    }

    return (
        <NavbarContainer>
            {
                !isLaptop && <MenuPopup/>
            }
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