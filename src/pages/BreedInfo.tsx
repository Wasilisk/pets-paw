/*node-modules*/
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

/*hooks*/
import {useAppSelector} from '../hooks/useAppSelector';
import {useAppDispatch} from '../hooks/AppDispatch';

/*components*/
import Carousel from "../components/Common/Carousel";
import {PageContainer} from "../components/PageContainer";
import PageNavigation from "../components/PageNavigation";
import {BreedInfoSection} from "../components/Sections";
import {EmptyLabel} from "../components/Common/Labels";

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
        <PageContainer>
            <PageNavigation/>
            {
                breedInfo
                    ? <>
                        <Carousel imagesUrl={breedsImages!} isLoading={isLoading}/>
                        {breedInfo && <BreedInfoSection breedInfo={breedInfo}/>}
                    </>
                    : <EmptyLabel>This breed of cats has not been found</EmptyLabel>
            }
        </PageContainer>
    );
};

export default BreedInfo;