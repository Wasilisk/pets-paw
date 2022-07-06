/*node-modules*/
import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

/*models*/
import {Breed} from "../../../models/common/breed";

type BreedGridItemProps = {
    breedInfo: Breed
}

const BreedGridItemContainer = styled.div`
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
    align-items: flex-end;
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

    p {
      text-align: center;
      height: 34px;
      width: 100%;
      background: #FFFFFF;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      font-weight: 500;
      font-size: 12px;
      line-height: 34px;
      color: #FF868E;
      text-transform: uppercase;
      transition: 0.2s ease;
      text-decoration: none;

      &:active {
        background: #FF868E;
        color: #FFFFFF;
      }
    }
  }
`;

export const BreedGridItem = ({breedInfo}: BreedGridItemProps) => {
    const {image, name, id} = breedInfo
    return (
        <BreedGridItemContainer>
            {
                image?.url
                    ? <img src={image.url} alt={name}/>
                    : <p>Image unavailable</p>
            }
            <Link to={`/breeds/${id}`}>
                <div className="overlay">
                    <p>{name}</p>
                </div>
            </Link>
        </BreedGridItemContainer>
    );
};