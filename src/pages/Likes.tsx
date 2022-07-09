/*node-modules*/
import React, {useEffect} from 'react';

/*store*/
import {getLikesImage, selectCategoryIsLoading, selectLikesCategory} from '../store/slices/categories-slice';

/*hooks*/
import {useAppDispatch, useAppSelector} from '../hooks';

/*components*/
import {ImageGridSkeleton} from '../components/Skeletons';
import {PageSection} from '../components/Sections';
import {EmptyLabel} from '../components/Labels';
import {ImageGrid, ImageGridItem} from '../components/Common/Grid';
import {PageNavigation} from '../components/Common';

/*models*/
import {Image} from '../models/common';

const Likes = () => {
    const dispatch = useAppDispatch();
    const likesImagesList = useAppSelector(selectLikesCategory)
    const isCategoryLoading = useAppSelector(selectCategoryIsLoading)

    useEffect(() => {
        dispatch(getLikesImage(localStorage.getItem("sub_id")!));
    }, [])

    return (
        <PageSection>
            <PageNavigation/>
            {
                isCategoryLoading
                    ? <ImageGridSkeleton limit={10}/>
                    : likesImagesList && likesImagesList.length > 0
                        ? <ImageGrid> {
                            likesImagesList.map((image: Image) => <ImageGridItem key={image.id} src={image.url} alt="Cat"/>)
                        }
                        </ImageGrid>
                        : <EmptyLabel>No item found</EmptyLabel>
            }
        </PageSection>
    );
}
export default Likes;