import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest, call } from "redux-saga/effects";
import { REPOS_FETCH_START} from "./repos.types.ts";
import { getReposError, getReposSuccess } from "./repos.reducer.ts";
import { apiGetRepos } from "../../services/repos.service.ts";

function* getReposAsync({ payload: params }: PayloadAction<string>) {
  try {
    const response = yield call(() => apiGetRepos(params));
    yield put(getReposSuccess(response));
  } catch (error) {
    yield put(getReposError(error));
  }
}

export function* onGetRepos() {
  yield takeLatest(REPOS_FETCH_START, getReposAsync);
}
