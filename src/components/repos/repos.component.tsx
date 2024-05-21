import React from "react";
import { useSelector } from 'react-redux';
import { ReposContainer } from './repos.styles.jsx';
import RepoTable from "../repo-table/repo-table.component.tsx";
import { selectRepos, selectReposHeaderOptions, selectReposLayoutType, selectReposOwner } from '../../store/repos/repos.selector.ts';
import { useDispatch } from 'react-redux';
import { getRepos } from '../../store/repos/repos.reducer.ts';
import { DataLayoutEnum } from '../../models/repos.models.ts'

const Repos = () => {
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);
  const owner = useSelector(selectReposOwner);
  const layoutType = useSelector(selectReposLayoutType);
  const headerOptions = useSelector(selectReposHeaderOptions);

  const clickHandler = (event) => {
    console.log(event.target.abbr);
    event.preventDefault();
    try {
      dispatch(getRepos(owner));
      console.log(`Repo Owner ${owner}`)
    } catch (error) {
      console.log('failed to get repos', error);
    }
    
  }
  return (
    <ReposContainer>
      { layoutType === DataLayoutEnum.TABLE ? <RepoTable repos={repos} tHeadOptions={headerOptions} clickHandler={clickHandler}></RepoTable> : null }
    </ReposContainer>
  )
}

export default Repos;