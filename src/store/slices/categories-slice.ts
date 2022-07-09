/*node-modules*/
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

/*store*/
import {RootState} from '../index';

/*models*/
import {Image} from '../../models/common';
import {Favourite} from '../../models/common';

/*services*/
import {ImageService} from '../../services/ImageService';
import {VotingService} from '../../services/VotingService';
import {FavouritesService} from '../../services/FavouritesService';

interface CategoriesState {
    likesImages: Image[],
    dislikesImages: Image[],
    favourites: Favourite[],
    isLoading: boolean
}

const initialState: CategoriesState = {
    likesImages: [],
    dislikesImages: [],
    favourites: [],
    isLoading: false
}

export const getLikesImage = createAsyncThunk(
    'categories/getLikesImage',
    async (userId: string): Promise<Image[]> => {
        const result: Image[] = [];
        const votesResponse = await VotingService.getUserVotes(userId);
        await Promise.all(votesResponse.data.map(async (vote) => {
            if(vote.value === 1) {
                const voteImage = await ImageService.getImageById(vote.image_id);
                result.push(voteImage.data)
            }
        }));
        return result;
    }
)

export const getDislikesImage = createAsyncThunk(
    'categories/getDislikesImage',
    async (userId: string): Promise<Image[]> => {
        const result: Image[] = [];
        const votesResponse = await VotingService.getUserVotes(userId);
        await Promise.all(votesResponse.data.map(async (vote) => {
            if(vote.value === 0) {
                const voteImage = await ImageService.getImageById(vote.image_id);
                result.push(voteImage.data)
            }
        }));
        return result;
    }
)

export const getFavouritesImage = createAsyncThunk(
    'categories/getFavouritesImage',
    async (userId: string): Promise<Favourite[]> => {
        const result: Favourite[] = [];
        const favouritesResponse = await FavouritesService.getUserFavourites(userId);
        await Promise.all(favouritesResponse.data.map(async (favourite) => {
                const favouriteImage = await ImageService.getImageById(favourite.image_id);
                result.push({...favourite, image: favouriteImage.data})
        }));
        return result;
    }
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        removeFromFavourite: (state, action:PayloadAction<number>) => {
            state.favourites = state.favourites.filter(favourite => favourite.id !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getLikesImage.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getLikesImage.fulfilled, (state, action: PayloadAction<Image[]>) => {
            state.likesImages = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getLikesImage.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(getDislikesImage.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getDislikesImage.fulfilled, (state, action: PayloadAction<Image[]>) => {
            state.dislikesImages = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getDislikesImage.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(getFavouritesImage.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getFavouritesImage.fulfilled, (state, action: PayloadAction<Favourite[]>) => {
            state.favourites = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getFavouritesImage.rejected, (state) => {
            state.isLoading = false;
        })
    },
})

export const {removeFromFavourite} = categoriesSlice.actions;

export const selectCategoryIsLoading = (state: RootState) => state.categories.isLoading;
export const selectLikesCategory = (state: RootState) => state.categories.likesImages;
export const selectDislikesCategory = (state: RootState) => state.categories.dislikesImages;
export const selectFavouritesCategory = (state: RootState) => state.categories.favourites;

export default categoriesSlice.reducer;