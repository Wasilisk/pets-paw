/*node-modules*/
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

/*store*/
import {RootState} from '../index';

/*models*/
import {Image} from '../../models/common';
import {GalleryFilters} from '../../models/filters';

/*services*/
import {ImageService} from '../../services/ImageService';

interface VotingState {
    galleryImages: Image[]
    isLoading: boolean
}

const initialState: VotingState = {
    galleryImages: [],
    isLoading: false
}

export const getAllImages = createAsyncThunk(
    'gallery/getAllImages',
    async (filters: GalleryFilters): Promise<Image[]> => {
        const response = await ImageService.getAllImages(filters);
        return response.data;
    }
)

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllImages.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getAllImages.fulfilled, (state, action: PayloadAction<Image[]>) => {
            state.galleryImages = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getAllImages.rejected, (state) => {
            state.isLoading = false;
        })
    },
})

export const selectGalleryIsLoading = (state: RootState) => state.gallery.isLoading;
export const selectGalleryImages = (state: RootState) => state.gallery.galleryImages;

export default gallerySlice.reducer;