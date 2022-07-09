/*node-modules*/
import React, {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

/*store*/
import {selectBreedsIsLoading} from '../store/slices/breeds-slice';
import {searchBreedByName, selectAllBreeds} from '../store/slices/breeds-slice';

/*hooks*/
import {useAppDispatch, useAppSelector} from '../hooks';

/*components*/
import {ImageGridSkeleton} from '../components/Skeletons';
import {PageSection} from '../components/Sections';
import {PageNavigation} from '../components/Common';
import {EmptyLabel, SearchResultLabel} from '../components/Labels';
import {BreedGridItem, ImageGrid} from '../components/Common/Grid';

/*models*/
import {Breed} from '../models/common';

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
        <PageSection>
            <PageNavigation/>
            <SearchResultLabel breedName={breedName}/>
            {
                isBreedsLoading
                    ? <ImageGridSkeleton limit={10}/>
                    : breedsList && breedsList.length > 0
                        ? <ImageGrid> {
                            breedsList.map((breed: Breed) => <BreedGridItem breedInfo={breed}/>)
                        }
                        </ImageGrid>
                        : <EmptyLabel>No item found</EmptyLabel>
            }

        </PageSection>
    );
}
export default BreedSearch;