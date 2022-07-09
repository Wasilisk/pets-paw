/*node-modules*/
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';


/*store*/
import {
    getAllBreeds, selectAllBreedsId,
    selectBreedsIsLoading,
    selectBreedsWithFilters
} from '../store/slices/breeds-slice';

/*hooks*/
import {useAppDispatch, useAppSelector} from '../hooks';

/*components*/
import {SortButton} from '../components/Buttons';
import {ImageGridSkeleton} from '../components/Skeletons';
import {OptionType, Select} from '../components/Common/Select';
import {BreedGridItem, ImageGrid} from '../components/Common/Grid';
import {PageSection} from '../components/Sections';
import {PageNavigation} from '../components/Common';
import {PaginationButtonGroup} from '../components/Buttons/ButtonsGroups';

/*models*/
import {Breed} from '../models/common';

/*icons*/
import {ReactComponent as AscSortIcon} from '../assets/icons/asc-sort.svg';
import {ReactComponent as DescSortIcon} from '../assets/icons/desc-sort.svg';

const Breeds = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isBreedsLoading = useAppSelector(selectBreedsIsLoading);
    const [pageLimit, setPageLimit] = useState<number>(10);
    const [sortType, setSortType] = useState<"desc" | "asc">("desc")
    const [pageCount, setPageCount] = useState<number>(1)
    const breedsOptions = useAppSelector(selectAllBreedsId);
    const breedsList = useAppSelector(selectBreedsWithFilters, {
        limit: pageLimit,
        page: pageCount,
        sortType
    })

    const isNextPageDisable: boolean = breedsList.length < pageLimit;

    const setLimit = (value: number) => {
        setPageCount(1);
        setPageLimit(value);
    };

    const changeBreedName = (breedId: string) => {
        navigate(breedId);
    }

    const options: OptionType[] = [
        {label: "Limit: 5", value: 5},
        {label: "Limit: 10", value: 10},
        {label: "Limit: 15", value: 15},
        {label: "Limit: 20", value: 20},
    ]


    useEffect(() => {
        dispatch(getAllBreeds());
    }, [])

    return (
        <PageSection>
            <PageNavigation>
                <Select width="226px" value={null} changeValue={changeBreedName} defaultValue="All breeds"
                        options={breedsOptions!}/>
                <Select width="100px" value={pageLimit} changeValue={setLimit} options={options}/>
                <SortButton isActive={sortType === "asc"} onClick={() => {
                    setSortType("asc")
                }}>
                    <AscSortIcon/>
                </SortButton>
                <SortButton isActive={sortType === "desc"} onClick={() => {
                    setSortType("desc")
                }}>
                    <DescSortIcon/>
                </SortButton>
            </PageNavigation>
            {
                isBreedsLoading
                    ? <ImageGridSkeleton limit={pageLimit}/>
                    :  <ImageGrid>
                        {breedsList?.map((breed: Breed) => <BreedGridItem key={breed.id} breedInfo={breed}/>)}
                    </ImageGrid>
            }
            <PaginationButtonGroup
                page={pageCount}
                setPage={setPageCount}
                isNextPageDisable={isNextPageDisable}
            />
        </PageSection>
    );
};

export default Breeds;