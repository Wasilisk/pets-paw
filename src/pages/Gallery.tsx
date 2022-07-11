/*node-modules*/
import React, {useEffect, useState} from 'react';

/*store*/
import {getAllImages, selectGalleryImages, selectGalleryIsLoading} from '../store/slices/gallery-slice';

/*hooks*/
import {useAppDispatch, useAppSelector} from '../hooks';

/*components*/
import {ImageGridSkeleton} from '../components/Skeletons';
import {PageSection} from '../components/Sections';
import {EmptyLabel} from '../components/Labels';
import {ImageGrid, GalleryImageGridItem} from '../components/Common/Grid';
import {PageNavigation} from '../components/Common';
import {GalleryButtonsGroup, PaginationButtonGroup} from '../components/Buttons/ButtonsGroups';
import {UploadPopupButton} from '../components/Buttons';

/*models*/
import {Image} from '../models/common';
import {GalleryFilters} from '../models/filters';

const Gallery = () => {
    const dispatch = useAppDispatch();
    const galleryImagesList = useAppSelector(selectGalleryImages)
    const isGalleryLoading = useAppSelector(selectGalleryIsLoading)
    const [filters, setFilters] = useState<GalleryFilters>({
        order: "RANDOM",
        limit: 5,
        page: null,
        breedId: null,
        imageType: null
    })

    const setPage = (page: number) => {
        setFilters({
            ...filters,
            page
        })
    }
    const isNextPageDisable = galleryImagesList.length < filters.limit;
    const isPaginationButtonActive = filters.order !== "RANDOM"
        && galleryImagesList.length > 0
        && galleryImagesList.length === filters.limit;

    useEffect(() => {
        dispatch(getAllImages(filters));
    }, [filters])

    return (
        <PageSection>
            <PageNavigation>
            <UploadPopupButton/>
            </PageNavigation>
            <GalleryButtonsGroup filters={filters} setFilters={setFilters}/>
            {
                isGalleryLoading
                    ? <ImageGridSkeleton limit={filters.limit}/>
                    : galleryImagesList && galleryImagesList.length > 0
                        ? <ImageGrid> {
                            galleryImagesList.map((image: Image) => <GalleryImageGridItem key={image.id} image={image}/>)
                        }
                        </ImageGrid>
                        : <EmptyLabel>No item found</EmptyLabel>
            }
            {
                isPaginationButtonActive && <PaginationButtonGroup
                    page={filters.page as number}
                    setPage={setPage}
                    isNextPageDisable={isNextPageDisable}
                />
            }
        </PageSection>
    );
}
export default Gallery;