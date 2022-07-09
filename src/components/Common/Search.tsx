/*node-modules*/
import React, {Dispatch, SetStateAction} from 'react';
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
    padding: 10px 8px;
  }
  
  &:focus-within {
    border: 2px solid #FF868E;
    padding: 0 10px;
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
    font-size: 20px;
    line-height: 30px;
    color: #1D1D1D;

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
    cursor: pointer;
  }
`;

type SearchProps = {
    placeholder: string,
    value: string,
    changeHandler: Dispatch<SetStateAction<string>>;
    onSubmit: () => void;
}

export const Search = ({placeholder, value, changeHandler, onSubmit}: SearchProps) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeHandler(e.target.value);
    }

    return (
        <SearchContainer>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <button onClick={onSubmit}>
                <SearchIcon/>
            </button>
        </SearchContainer>
    );
};