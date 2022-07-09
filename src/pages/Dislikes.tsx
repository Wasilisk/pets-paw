/*node-modules*/
import React, {useEffect} from 'react';

/*store*/
import {
    getDislikesImage,
    selectCategoryIsLoading,
    selectDislikesCategory,
} from '../store/slices/categories-slice';

/*hooks*/
import {useAppDispatch, useAppSelector} from '../hooks';

/*components*/
import {ImageGridSkeleton} from '../components/Skeletons';
import {PageSection} from '../components/Sections';
import {PageNavigation} from '../components/Common';
import {EmptyLabel} from '../components/Labels';
import {ImageGrid, ImageGridItem} from '../components/Common/Grid';

/*models*/
import {Image} from '../models/common';

const Dislikes = () => {
    const dispatch = useAppDispatch();
    const dislikesImagesList = useAppSelector(selectDislikesCategory)
    const isCategoryLoading = useAppSelector(selectCategoryIsLoading)

    useEffect(() => {
        dispatch(getDislikesImage(localStorage.getItem("sub_id")!));
    }, [])

    return (
        <PageSection>
            <PageNavigation/>
            {
                isCategoryLoading
                    ? <ImageGridSkeleton limit={10}/>
                    : dislikesImagesList && dislikesImagesList.length > 0
                        ? <ImageGrid> {
                            dislikesImagesList.map((image: Image) => <ImageGridItem key={image.id} src={image.url} alt="Cat"/>)
                        }
                        </ImageGrid>
                        : <EmptyLabel>No item found</EmptyLabel>
            }
        </PageSection>
    );
}
export default Dislikes;