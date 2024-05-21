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

export const selectReposOwner = createSelector(
  [selectReposReducer],
  (reposSlice) => reposSlice.owner
);

export const selectReposLayoutType = createSelector(
  [selectReposReducer],
  (reposSlice) => reposSlice.reposLayoutType
);

export const selectReposHeaderOptions = createSelector(
  [selectReposReducer],
  (reposSlice) => reposSlice.reposHeaderOptions
);

export const selectSort = createSelector(
  [selectReposReducer],
  (reposSlice) => reposSlice.sort
);

export const selectDirection = createSelector(
  [selectReposReducer],
  (reposSlice) => reposSlice.direction
);
