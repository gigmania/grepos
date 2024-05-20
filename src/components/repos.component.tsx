import React from "react";
import { useSelector } from 'react-redux';

import { selectRepos, selectReposIsLoading } from '../store/repos/repos.selector.ts'

const Repos = () => {
  const repos = useSelector(selectRepos);
  const isLoading = useSelector(selectReposIsLoading);
  const reposJson = JSON.stringify(repos);
  return (
    <div>
      <h1> I am a table of respos</h1>
      <code> {reposJson} </code>
    </div>
  )
}

export default Repos;