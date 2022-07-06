/*node-modules*/
import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

/*store*/
import {selectBreedsIsLoading} from "../store/slices/breeds-slice";
import {searchBreedByName, selectAllBreeds} from "../store/slices/breeds-slice";

/*hooks*/
import {useAppDispatch} from "../hooks/AppDispatch";
import {useAppSelector} from "../hooks/useAppSelector";

/*components*/
import {ImageGridSkeleton} from "../components/Skeletons";
import {PageContainer} from "../components/PageContainer";
import PageNavigation from "../components/PageNavigation";
import {EmptyLabel, SearchResultLabel} from "../components/Common/Labels";
import {BreedGridItem, ImageGrid} from "../components/Common/Grid";

/*models*/
import {Breed} from "../models/common/breed";

const BreedSearch = () => {
    const dispatch = useAppDispatch();
    const isBreedsLoading = useAppSelector(selectBreedsIsLoading)
    const breedsList = useAppSelector(selectAllBreeds);
    const [searchParams] = useSearchParams();
    const breedName = searchParams.get("breed_name");

    useEffect(() => {
        dispatch(searchBreedByName(breedName!));
    }, [breedName])

    return (
        <PageContainer>
            <PageNavigation/>
            <SearchResultLabel breedName={breedName}/>
            {
                isBreedsLoading
                    ? <ImageGridSkeleton/>
                    : breedsList && breedsList.length > 0
                        ? <ImageGrid> {
                            breedsList.map((breed: Breed) => <BreedGridItem breedInfo={breed}/>)
                        }
                        </ImageGrid>
                        : <EmptyLabel>No item found</EmptyLabel>
            }

        </PageContainer>
    );
}
export default BreedSearch;