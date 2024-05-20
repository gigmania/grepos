import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { ReposState } from './repos.reducer.ts';

const selectReposReducer = (state: RootState): ReposState =>
  state.repos;

export const selectRepos = createSelector(
  [selectReposReducer],
  (reposSlice) => reposSlice.repos
);

export const selectReposIsLoading = createSelector(
  [selectReposReducer],
  (reposSlice) => reposSlice.isLoading
);
