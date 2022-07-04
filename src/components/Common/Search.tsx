/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*icons*/
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg'

const SearchContainer = styled.div`
  width: 470px;
  height: 60px;
  background: #FFFFFF;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    border: 2px solid #FBE0DC;
  }
  
  &:focus-within {
    border: 2px solid #FF868E;
  }

  &:hover input::-webkit-input-placeholder {
    color: transparent;
  }
  
  input {
    height: 30px;
    width: 86%;
    padding-left: 10px;
    border: none;
    outline: none;

    &::-webkit-input-placeholder {
      font-size: 20px;
      line-height: 30px;
      color: #8C8C8C;
      transition: all 0.2s;
    }
  }
  
  button {
    width: 40px;
    height: 40px;
    background: #FBE0DC;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Search = () => {
    return (
        <SearchContainer>
            <input type="text" placeholder="Search for breeds by name"/>
            <button>
                <SearchIcon/>
            </button>
        </SearchContainer>
    );
};

export default Search;