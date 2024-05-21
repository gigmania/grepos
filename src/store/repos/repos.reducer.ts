import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RepoApiResponse, RepoRequestParams, RepoTableColumnDataNames, SortDirections, Repo, HeaderOptions } from '../../models/repos.models.ts';
import { REPOS } from './repos.types.ts';

export type ReposState = {
  readonly owner: string;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly repos: Repo[];
  readonly reposHeaderOptions: HeaderOptions[];
  readonly reposLayoutType: string;
  readonly sort: string;
  readonly direction: string;
};

export const REPOS_INITIAL_STATE: ReposState = {
  owner: '',
  isLoading: false,
  error: null,
  repos: [],
  reposHeaderOptions: [],
  reposLayoutType: '',
  sort: '',
  direction: ''
};

export const reposSlice = createSlice({
  name: REPOS,
  initialState: REPOS_INITIAL_STATE,
  reducers: {
    getRepos: (state, action: PayloadAction<RepoRequestParams>) => {
      const { sort, owner, direction } = action.payload;
      state.isLoading = true;
      state.owner = owner;
      state.sort = sort || RepoTableColumnDataNames.FULL_NAME;
      state.direction = direction || SortDirections.ASC;
    },
    getReposSuccess: (state, action: PayloadAction<RepoApiResponse>) => {
      const { repos, headerOptions, layoutType } = action.payload;
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
