import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { REPOS_FETCH_START} from "./repos.types.ts";
import { getReposError, getReposSuccess } from "./repos.reducer.ts";

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Accept: 'application/vnd.github.v3+json' },
})

function* getReposAsync({ payload: owner }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<any> = yield call(() => api.get(`/users/${owner}/repos`));
    yield put(getReposSuccess(response.data));
  } catch (error) {
    yield put(getReposError(error));
  }
}

export function* onGetRepos() {
  yield takeLatest(REPOS_FETCH_START, getReposAsync);
}
