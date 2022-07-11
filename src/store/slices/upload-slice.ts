/*node-modules*/
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

/*store*/
import {RootState} from '../index';

/*models*/
import {ImageService} from '../../services/ImageService';
import {ImageUploadResponse} from '../../models/response';

interface UploadState {
    isLoading: boolean
    uploadStatus: "success" | "failed" | null,
}

const initialState: UploadState = {
    isLoading: false,
    uploadStatus: null
}

export const uploadImage = createAsyncThunk(
    'upload/uploadImage',
    async (data: FormData): Promise<ImageUploadResponse> => {
        const uploadResponse = await ImageService.uploadImage(data);
        return uploadResponse.data;
    }
)

export const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {
        resetStatus(state) {
            state.uploadStatus = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(uploadImage.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(uploadImage.fulfilled, (state, action: PayloadAction<ImageUploadResponse>) => {
            if(action.payload.approved === 1) {
                state.uploadStatus = "success";
            }
            state.isLoading = false;
        })
        builder.addCase(uploadImage.rejected, (state) => {
            state.uploadStatus = "failed";
            state.isLoading = false;
        })
    },
});

export const {resetStatus} = uploadSlice.actions;

export const selectIsUploading = (state: RootState) => state.upload.isLoading;
export const selectUploadingStatus = (state: RootState) => state.upload.uploadStatus;

export default uploadSlice.reducer;