import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { getMe, saveMe } from '@src/utils/indexedDBHelpers';
import { RootState } from '@src/app/rootReducer';

const initialState = {
    me: null,
    status: 'idle',
};

export const fetchMe = createAsyncThunk('user/fetchMe', async () => {
    const user = await getMe();
    return user;
});

export const saveMeThunk = createAsyncThunk('user/saveMe', async (me: any) => {
    await saveMe(me);
    return me;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMe.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMe.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.me = action.payload;
            })
            .addCase(fetchMe.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(saveMeThunk.fulfilled, (state, action) => {
                state.me = action.payload;
            });
    },
});

export default userSlice.reducer;

const selectState = (state: RootState) => state.user;
export const selectUser = createSelector(selectState, (state) => state.me);
export const selectUserFetchState = createSelector(selectState, (state) => state.status);
