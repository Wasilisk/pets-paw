/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*models*/
import {Breed} from '../../models/common';

const BreedInfoContainer = styled.div`
  width: 100%;
  border: 2px solid #FBE0DC;
  border-radius: 20px;
  position: relative;
  margin-top: 40px;
  padding: 26px 40px;
  
  .breed-name {
    font-weight: 500;
    font-size: 36px;
    line-height: 52px;
    white-space: nowrap;
    color: #1D1D1D;
    position: absolute;
    background-color: #FFFFFF;
    padding: 0 40px;
    top: -25px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  
  .breed-description {
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #8C8C8C;
    margin-bottom: 20px;
  }
  
  .characteristics {
    display: flex;
    justify-content: space-between;
    
    div {
      width: 270px;
    }
  }
  
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #1D1D1D;
  }
  
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #8C8C8C;
  }
`;

type BreedInfoSectionProps = {
    breedInfo: Breed
}

export const BreedInfoSection = ({breedInfo}: BreedInfoSectionProps) => {
    return (
        <BreedInfoContainer>
            <h4 className="breed-name">{breedInfo.name}</h4>
            <p className="breed-description">{breedInfo.description}</p>
            <div className="characteristics">
                <div className="temperament-block">
                    <p><span>Temperament: </span><br/>{breedInfo.temperament}</p>
                </div>
                <div>
                    <p><span>Origin: </span>{breedInfo.origin}</p>
                    <p><span>Weight: </span>{breedInfo.weight.metric}</p>
                    <p><span>Life span: </span>{breedInfo.life_span}</p>
                </div>
            </div>
        </BreedInfoContainer>
    );
};