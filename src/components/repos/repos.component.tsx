import React from "react";
import { useSelector } from 'react-redux';
import { ReposContainer } from './repos.styles.jsx';
import RepoTable from "../repo-table/repo-table.component.tsx";
import { selectDirection, selectRepos, selectReposHeaderOptions, selectReposLayoutType, selectReposOwner, selectSort } from '../../store/repos/repos.selector.ts';
import { useDispatch } from 'react-redux';
import { getRepos } from '../../store/repos/repos.reducer.ts';
import { DataLayoutEnum, SortDirectionsEnum } from '../../models/repos.models.ts'

const Repos = () => {
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);
  const owner = useSelector(selectReposOwner);
  const layoutType = useSelector(selectReposLayoutType);
  const headerOptions = useSelector(selectReposHeaderOptions);
  const currentSort = useSelector(selectSort);
  const currentDirection = useSelector(selectDirection)

  const clickHandler = (event) => {
    event.preventDefault();
    console.log(event.target.abbr);
    const sort = event.target.abbr;
    const direction = currentSort === sort ? currentDirection === SortDirectionsEnum.ASC ? SortDirectionsEnum.DESC : SortDirectionsEnum.ASC : SortDirectionsEnum.ASC;
    try {
      dispatch(getRepos({owner, sort, direction}));
    } catch (error) {
      console.log('failed to get repos', error);
    }
  }
  return (
    <ReposContainer role="repos">
      { layoutType === DataLayoutEnum.TABLE ? <RepoTable repos={repos} tHeadOptions={headerOptions} clickHandler={clickHandler}></RepoTable> : null }
    </ReposContainer>
  )
}

export default Repos;
