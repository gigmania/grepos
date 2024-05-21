import axios, { AxiosResponse } from "axios";
import { 
  RepoApiResponse, 
  DataLayoutEnum, 
  Repo, 
  HeaderOptions, 
  RepoTableColumnDisplayNames, 
  ClassNames,
  RepoTableColumnDataNames
} from '../models/repos.models.ts'

export type ApiResponse = {
  [key: string]: any
}

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Accept: 'application/vnd.github.v3+json' },
})


export const apiGetRepos = async (owner) => {
  const rawResponse: AxiosResponse = await api.get(`/users/${owner}/repos`);
  return transformDataForClient(rawResponse.data);
}

const mapRawData = (data) => {
  return (
    data.map(d => {
      let repo: Repo = {
        owner: d.owner,
        name: d.name,
        description: d.description,
        createdAt: d.created_at,
        updatedAt: d.updated_at,
        pushedAt: d.pushed_at
      }
      return repo;
    })
  )
}

export const tableHeaderOptions: HeaderOptions[] = [
  {
    displayName: RepoTableColumnDisplayNames.REPO_NAME,
    clickable: true,
    className: ClassNames.SORTABLE,
    dataName: RepoTableColumnDataNames.FULL_NAME
  },
  {
    displayName: RepoTableColumnDisplayNames.DESCRIPTION,
    clickable: false,
    dataName: RepoTableColumnDataNames.DESCRIPTION
  },
  {
    displayName: RepoTableColumnDisplayNames.CREATED_AT,
    clickable: true,
    className: ClassNames.SORTABLE,
    dataName: RepoTableColumnDataNames.CREATED_AT
  },
  {
    displayName: RepoTableColumnDisplayNames.UPDATED_AT,
    clickable: true,
    className: ClassNames.SORTABLE,
    dataName: RepoTableColumnDataNames.UPDATED_AT
  },
  {
    displayName: RepoTableColumnDisplayNames.PUSHED_AT,
    clickable: true,
    className: ClassNames.SORTABLE,
    dataName: RepoTableColumnDataNames.PUSHED_AT
  }
]

const composeHeaderOptions = () => tableHeaderOptions;

const transformDataForClient = (data) => {
  const transformedData: RepoApiResponse = {
    layoutType: DataLayoutEnum.TABLE,
    repos: mapRawData(data),
    headerOptions: composeHeaderOptions()
  };
  return transformedData;
}
