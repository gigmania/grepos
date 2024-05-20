import { all, fork, call } from "redux-saga/effects";
import { onGetRepos } from "./repos/repos.saga.ts";

export const rootSaga = function* () {
  yield all([
    fork(onGetRepos),
    // Other forks
  ]);
};
