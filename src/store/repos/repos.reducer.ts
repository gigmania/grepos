import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ReposState = {
  readonly owner: string;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly repos: any[];
};

export const REPOS_INITIAL_STATE: ReposState = {
  owner: '',
  isLoading: false,
  error: null,
  repos: []
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState: REPOS_INITIAL_STATE,
  reducers: {
    getRepos: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.owner = action.payload;
    },
    getReposSuccess: (state, action: PayloadAction<any[]>) => {
      state.isLoading = false;
      state.repos = action.payload;
    },
    getReposError: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})


export const { getRepos, getReposSuccess, getReposError } = reposSlice.actions;

export const reposReducer = reposSlice.reducer;
