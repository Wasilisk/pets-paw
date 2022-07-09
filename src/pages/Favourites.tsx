/*node-modules*/
import React, {useEffect} from 'react';

/*store*/
import {
    getFavouritesImage,
    selectCategoryIsLoading,
    selectFavouritesCategory,
} from '../store/slices/categories-slice';

/*hooks*/
import {useAppDispatch, useAppSelector} from '../hooks';

/*components*/
import {ImageGridSkeleton} from '../components/Skeletons';
import {PageNavigation} from '../components/Common';
import {EmptyLabel} from '../components/Labels';
import {ImageGrid, FavouriteImageGridItem} from '../components/Common/Grid';
import {ActionLogsSection, PageSection} from '../components/Sections';

/*models*/
import {Favourite} from '../models/common';

const Favourites = () => {
    const dispatch = useAppDispatch();
    const favouritesList = useAppSelector(selectFavouritesCategory)
    const isCategoryLoading = useAppSelector(selectCategoryIsLoading)

    useEffect(() => {
        dispatch(getFavouritesImage(localStorage.getItem("sub_id")!));
    }, [])

    return (
        <PageSection>
            <PageNavigation/>
            {
                isCategoryLoading
                    ? <ImageGridSkeleton limit={10}/>
                    : favouritesList && favouritesList.length > 0
                        ? <ImageGrid> {
                            favouritesList.map((favourite: Favourite) => <FavouriteImageGridItem
                                key={favourite.id}
                                favourite={favourite}
                            />)
                        }
                        </ImageGrid>
                        : <EmptyLabel>No item found</EmptyLabel>
            }
            <ActionLogsSection/>
        </PageSection>
    );
}
export default Favourites;