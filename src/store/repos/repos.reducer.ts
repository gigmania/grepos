import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RepoApiResponse } from '../../models/repos.models.ts'

export type ReposState = {
  readonly owner: string;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly repos: any[];
  readonly reposHeaderOptions: any[];
  readonly reposLayoutType: string;
};

export const REPOS_INITIAL_STATE: ReposState = {
  owner: '',
  isLoading: false,
  error: null,
  repos: [],
  reposHeaderOptions: [],
  reposLayoutType: ''
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState: REPOS_INITIAL_STATE,
  reducers: {
    getRepos: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.owner = action.payload;
    },
    getReposSuccess: (state, action: PayloadAction<RepoApiResponse>) => {
      const { repos, headerOptions, layoutType } = action.payload;
      console.log("reducer --> ", headerOptions);
      state.isLoading = false;
      state.repos = repos;
      state.reposHeaderOptions = headerOptions;
      state.reposLayoutType = layoutType;
    },
    getReposError: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    } 
  }
})

export const { getRepos, getReposSuccess, getReposError } = reposSlice.actions;

export const reposReducer = reposSlice.reducer;
