

import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { PageResponse, getPage, postPage, patchPage } from '@src/api/pageAPI';


import { RootState } from '@src/app/rootReducer';
import { AppThunk } from '@src/app/store';

import { Page } from '@src/models/page';

interface PagesState {
    page: Page | null;
    isLoading: boolean;
    errors: any;
}

const initialState: PagesState = {
    page: null,
    isLoading: false,
    errors: {},
};

type PageRequest = {
    shortId: string;
};

export const fetchPageThunk = createAsyncThunk(
    `page/fetchPageThunk`,
    async ({ shortId }: PageRequest, { dispatch }) => {
        try {
            const page = await getPage({ shortId });

            if (page) {
                dispatch(getPageSuccess(page));
            }
        } catch (err) {
            console.error(err);
        }
    },
);

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPageFailure: (state, action) => {
            state.errors = action.payload;
        },
        getPageSuccess(state, { payload }: PayloadAction<PageResponse>) {
            if (payload) {
                const page: Page = {
                    shortId: payload.data.shortId,
                    title: payload.data.title,
                    source: payload.data.source,
                    revisionCount: payload.data.revisionCount,
                    updatedAt: payload.data.updatedAt,
                    updatedBy: payload.data.updatedBy,
                    isLocked: payload.data.isLocked,
                };
                state.page = page;
            }
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPageThunk.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPageThunk.fulfilled, (state) => {
            state.isLoading = false;
        });
    },
});

export const { setPageFailure, getPageSuccess } = pageSlice.actions;

export default pageSlice.reducer;

export const createPage =
    (
        title: string,
        source: string,
        createdBy: string,
        { onSuccess, onFailure }: { onSuccess: (page: Page) => void; onFailure: () => void },
    ): AppThunk =>
        async () => {
            try {
                const response = await postPage({
                    title,
                    source,
                    createdBy,
                });
                if (response) {
                    onSuccess(response.data);
                }
            } catch (err: any) {
                console.error(err);
                const response = err.response;
                let errors = [];
                if (response?.data) {
                    errors = response.data.errors;
                }
                onFailure();
            }
        };

export const updatePage =
    (
        shortId: string,
        title: string,
        source: string,
        createdBy: string,
        { onSuccess, onFailure }: { onSuccess: (page: Page) => void; onFailure: () => void },
    ): AppThunk =>
        async () => {
            try {
                const response = await patchPage({
                    shortId,
                    title,
                    source,
                    createdBy,
                });
                if (response) {
                    onSuccess(response.data);
                }
            } catch (err: any) {
                console.error(err);
                const response = err.response;
                let errors = [];
                if (response?.data) {
                    errors = response.data.errors;
                }
                onFailure();
            }
        };


const selectState = (state: RootState) => state.page;
export const selectPage = createSelector(selectState, (state) => state.page);
export const selectPageFetchState = createSelector(selectState, (state) => state.isLoading);
