/*node-modules*/
import React, {useEffect, useState} from 'react';

/*store*/
import {
    getAllBreeds,
    selectAllBreedsName,
    selectBreedsIsLoading,
    selectBreedsWithFilters
} from "../store/slices/breeds-slice";

/*hooks*/
import {useAppDispatch} from "../hooks/AppDispatch";
import {useAppSelector} from "../hooks/useAppSelector";

/*components*/
import {SortButton} from "../components/Buttons/SortButton";
import {ImageGridSkeleton} from "../components/Skeletons";
import {PageContainer} from "../components/PageContainer";
import PageNavigation from "../components/PageNavigation";
import {OptionType, Select} from "../components/Common/Select";
import {BreedGridItem, ImageGrid} from "../components/Common/Grid";

/*models*/
import {Breed} from "../models/common/breed";

/*icons*/
import {ReactComponent as AscSortIcon} from '../assets/icons/asc-sort.svg';
import {ReactComponent as DescSortIcon} from '../assets/icons/desc-sort.svg';


const Breeds = () => {
    const dispatch = useAppDispatch();
    const isBreedsLoading = useAppSelector(selectBreedsIsLoading);
    const [breedName, setBreedsName] = useState<OptionType | null>(null);
    const [limit, setLimit] = useState<OptionType>({label: "Limit: 10", value: 10});
    const [sortType, setSortType] = useState<"desc" | "asc">("desc")
    const allBreedsName = useAppSelector(selectAllBreedsName);
    const breedsList = useAppSelector(selectBreedsWithFilters, {
        breedName: breedName?.value as string,
        limit: limit.value as number,
        sortType
    })

    const options: OptionType[] = [
        {label: "Limit: 5", value: 5},
        {label: "Limit: 10", value: 10},
        {label: "Limit: 15", value: 15},
        {label: "Limit: 20", value: 20},
        {label: "Limit: 50", value: 50},
        {label: "Unlimited", value: 100},
    ]


    useEffect(() => {
        dispatch(getAllBreeds());
    }, [])

    return (
        <PageContainer>
            <PageNavigation>
                <Select width="226px" value={breedName} changeValue={setBreedsName} defaultValue="All breeds"
                        options={allBreedsName!}/>
                <Select width="100px" value={limit} changeValue={setLimit} options={options}/>
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
            <ImageGrid>
                {
                    isBreedsLoading ?
                        <ImageGridSkeleton/> :
                        breedsList?.map((breed: Breed) => <BreedGridItem key={breed.id} breedInfo={breed}/>)
                }
            </ImageGrid>
        </PageContainer>
    );
};

export default Breeds;