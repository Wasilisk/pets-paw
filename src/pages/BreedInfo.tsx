/*node-modules*/
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

/*hooks*/
import {useAppDispatch, useAppSelector} from "../hooks";

/*components*/
import {Carousel} from "../components/Common";
import {BreedInfoSection, PageSection} from "../components/Sections";
import {EmptyLabel} from "../components/Labels";
import {PageNavigation} from "../components/Common";

/*store*/
import {
    getImagesByBreedId,
    selectBreedById,
    selectBreedsIsLoading,
    selectImagesByBreed
} from "../store/slices/breeds-slice";



const BreedInfo = () => {
    const {breedId} = useParams();
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectBreedsIsLoading);
    const breedInfo = useAppSelector(selectBreedById, breedId);
    const breedsImages = useAppSelector(selectImagesByBreed);

    useEffect(() => {
        dispatch(getImagesByBreedId(breedId!))
    }, [])

    return (
        <PageSection>
            <PageNavigation/>
            {
                breedInfo
                    ? <>
                        <Carousel imagesUrl={breedsImages!} isLoading={isLoading}/>
                        {breedInfo && <BreedInfoSection breedInfo={breedInfo}/>}
                    </>
                    : <EmptyLabel>This breed of cats has not been found</EmptyLabel>
            }
        </PageSection>
    );
};

export default BreedInfo;