/*node-modules*/
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

/*store*/
import {RootState} from '../index';

/*models*/
import {Image} from '../../models/common/image';

/*services*/
import {ImageService} from '../../services/ImageService';

interface VotingState {
    votingImage: Image | null,
    isLoading: boolean
}

const initialState: VotingState = {
    votingImage: null,
    isLoading: false
}

export const getVotingImage = createAsyncThunk(
    'voting/getVotingImage',
    async (): Promise<Image> => {
        const response = await ImageService.getRandomImage();
        return response.data[0];
    }
)

export const votingSlice = createSlice({
    name: 'voting',
    initialState,
    reducers: {
        setImageLoaded: (state) => {
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getVotingImage.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getVotingImage.fulfilled, (state, action: PayloadAction<Image>) => {
            state.votingImage = action.payload;
        })
        builder.addCase(getVotingImage.rejected, (state) => {
            state.isLoading = false;
        })
    },
})

export const {setImageLoaded} = votingSlice.actions;

export const selectVotingImage = (state: RootState) => state.voting;

export default votingSlice.reducer;