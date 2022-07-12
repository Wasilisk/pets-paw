/*node-modules*/
import React, {useEffect} from 'react';
import styled from 'styled-components';

/*hooks*/
import {useAppDispatch, useAppSelector} from '../../../hooks';

/*store*/
import {getAllBreeds, selectAllBreedsId} from '../../../store/slices/breeds-slice';

/*components*/
import {OptionType, Select} from '../../Common/Select';
import {IconButton} from '../IconButton';

/*models*/
import {GalleryFilters} from '../../../models/filters';

/*icons*/
import {ReactComponent as RefreshIcon} from '../../../assets/icons/refresh.svg';

const GalleryButtonsGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 10px;
  background: #F8F8F7;
  border-radius: 20px;
  padding: 10px 20px 20px 20px;

  & > div {
    width: 100%;
  }

  & > div span {
    margin-left: 10px;
    font-weight: 500;
    font-size: 10px;
    line-height: 18px;
    color: #8C8C8C;
    text-transform: uppercase;
    cursor: default;
  }

  .refresh-block {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > div {
      flex: 1;
    }

    button {
      margin-left: 10px;
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }

  @media (max-width: 375px) {
    .refresh-block {
      flex-direction: column;
      
      & > * {
        width: 100%;
      }
      
      button {
        margin: 10px 0 0 0;
      }
    }
  }
`
const limitOptions: OptionType[] = [
    {label: "5 items per page", value: 5},
    {label: "10 items per page", value: 10},
    {label: "15 items per page", value: 15},
    {label: "20 items per page", value: 20},
]

const typeOptions: OptionType[] = [
    {label: "Static", value: "jpg,png"},
    {label: "Animated", value: "gif"},
]

const orderOptions: OptionType[] = [
    {label: "Random", value: "RANDOM"},
    {label: "Desc", value: "DESC"},
    {label: "Asc", value: "ASC"},
]


type GalleryButtonsGroupProps = {
    filters: GalleryFilters,
    setFilters: (arg: any) => any
}

export const GalleryButtonsGroup = ({filters, setFilters}: GalleryButtonsGroupProps) => {
    const dispatch = useAppDispatch();
    const allBreedsName = useAppSelector(selectAllBreedsId);

    useEffect(() => {
        dispatch(getAllBreeds());
    }, [])

    const changeLimitValue = (limit: number) => {
        setFilters({...filters, limit: limit});
    }
    const changeOrderValue = (order: string) => {
        order === "RANDOM"
            ? setFilters({...filters, order, page: null})
            : setFilters({...filters, order, page: 1})
    }
    const changeImageTypeValue = (imageType: string) => {
        setFilters({...filters, imageType: imageType});
    }
    const changeBreedValue = (breedId: string) => {
        setFilters({...filters, breedId: breedId, page: 1});
    }
    const refreshPage = () => {
        setFilters({...filters});
    }

    return (
        <GalleryButtonsGroupContainer>
            <div>
                <span>Order</span>
                <Select
                    variant="secondary"
                    value={filters.order}
                    changeValue={changeOrderValue}
                    options={orderOptions}
                />
            </div>
            <div>
                <span>Type</span>
                <Select
                    variant="secondary"
                    value={filters.imageType}
                    defaultValue="All"
                    changeValue={changeImageTypeValue}
                    options={typeOptions}
                />
            </div>
            <div>
                <span>Breed</span>
                <Select variant="secondary"
                        value={filters.breedId}
                        defaultValue="All breeds"
                        changeValue={changeBreedValue}
                        options={allBreedsName!}
                />
            </div>
            <div className="refresh-block">
                <div>
                    <span>Limit</span>
                    <Select variant="secondary"
                            value={filters.limit}
                            changeValue={changeLimitValue}
                            options={limitOptions}
                    />
                </div>
                {
                    filters.order === "RANDOM" && <IconButton variant="secondary" onClick={refreshPage}>
                        <RefreshIcon/>
                    </IconButton>
                }
            </div>
        </GalleryButtonsGroupContainer>
    );
};