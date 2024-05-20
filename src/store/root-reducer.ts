import { combineReducers } from '@reduxjs/toolkit';
import { reposReducer } from './repos/repos.reducer.ts';

export const rootReducer = combineReducers({
  repos: reposReducer
});

