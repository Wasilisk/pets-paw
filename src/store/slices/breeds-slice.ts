/*node-modules*/
import {createAsyncThunk, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';

/*store*/
import {RootState} from '../index';

/*models*/
import {Image} from '../../models/common';
import {Breed} from "../../models/common";
import {BreedFilters} from "../../models/filters";
import {OptionType} from "../../components/Common/Select";

/*services*/
import {BreedService} from "../../services/BreedService";
import {ImageService} from "../../services/ImageService";

interface VotingState {
    breedsList: Breed[] | null,
    currentBreedImages: [Image] | null,
    isLoading: boolean
}

const initialState: VotingState = {
    breedsList: null,
    currentBreedImages: null,
    isLoading: false
}

export const getAllBreeds = createAsyncThunk(
    'breeds/getAllBreeds',
    async (): Promise<Breed[]> => {
        const response = await BreedService.getAllBreeds();
        return response.data;
    }
)

export const getImagesByBreedId = createAsyncThunk(
    'breeds/getImagesByBreedId',
    async (breedId: string): Promise<[Image]> => {
        const response = await ImageService.getImagesByBreedId(breedId);
        return response.data;
    }
)

export const searchBreedByName = createAsyncThunk(
    'breeds/searchBreedByName',
    async (breedName: string): Promise<Breed[]> => {
        const result: Breed[] = [];
        const breedResponse = await BreedService.searchBreedByName(breedName);
        await Promise.all(breedResponse.data.map(async (breed) => {
            const breedImage = await ImageService.getOneImageBreedById(breed.id);
            result.push({...breed, image: breedImage.data[0]})
        }));

        return result;
    }
)


export const breedsSlice = createSlice({
    name: 'breeds',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBreeds.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getAllBreeds.fulfilled, (state, action: PayloadAction<Breed[]>) => {
            state.breedsList = action.payload;
            state.isLoading = false;
        })

        builder.addCase(getImagesByBreedId.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getImagesByBreedId.fulfilled, (state, action: PayloadAction<[Image]>) => {
            state.currentBreedImages = action.payload;
            state.isLoading = false;
        })

        builder.addCase(searchBreedByName.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(searchBreedByName.fulfilled, (state, action: PayloadAction<Breed[]>) => {
            state.breedsList = action.payload;
            state.isLoading = false;
        })
    },
})


export const selectAllBreeds = (state: RootState) => state.breeds.breedsList;
export const selectBreedsIsLoading = (state: RootState) => state.breeds.isLoading;
export const selectAllBreedsId = (state: RootState) => state.breeds.breedsList?.map((breed: Breed): OptionType => {
    return ({
        label: breed.name,
        value: breed.id
    })
});
export const selectBreedById = (state: RootState, breedId: string) => state.breeds.breedsList?.filter((breed: Breed) => breed.id === breedId)[0];
export const selectImagesByBreed = (state: RootState) => state.breeds.currentBreedImages?.map((image: Image) => image.url);
export const selectBreedsWithFilters = createSelector(
    [
        state => state.breeds.breedsList,
        (state, filters: BreedFilters) =>  filters
    ],
    (breedsList, filters) => {
        let breedsListOutput = breedsList;
        let offset = (filters.page - 1) * filters.limit;
        if(filters.sortType === "asc") {
            breedsListOutput = [...breedsListOutput].sort((a: Breed, b: Breed) => (a.name > b.name ? -1 : 1))
        }
        return breedsListOutput?.slice(offset, offset + filters.limit);
    }
);

export default breedsSlice.reducer;