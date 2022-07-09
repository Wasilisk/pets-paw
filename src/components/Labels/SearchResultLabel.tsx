import React from 'react';
import styled from 'styled-components';

const SearchResultLabelContainer = styled.p`
  margin-top: 20px;
  font-size: 20px;
  line-height: 29px;
  color: #8C8C8C;
  
  span {
    color: #1D1D1D;
    font-weight: 500;
  }
`

type SearchResultLabelProps = {
    breedName: string| null
}

export const SearchResultLabel = ({breedName}: SearchResultLabelProps) => {
    return (
        <SearchResultLabelContainer>
            Search results for: <span>{breedName}</span>
        </SearchResultLabelContainer>
    );
};