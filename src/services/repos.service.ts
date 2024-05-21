import axios, { AxiosResponse } from "axios";
import { 
  RepoApiResponse, 
  DataLayoutEnum, 
  Repo, 
  HeaderOptions, 
  RepoTableColumnDisplayNamesEnum, 
  ClassNamesEnum,
  RepoTableColumnDataNamesEnum,
  SortDirectionsEnum,
  ApiPathParamsEnum
} from '../models/repos.models.ts'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Accept: 'application/vnd.github.v3+json' },
})


export const apiGetRepos = async (params) => {
  let { owner, sort, direction } = params;
  sort = sort ? sort : RepoTableColumnDataNamesEnum.FULL_NAME;
  direction = direction || SortDirectionsEnum.ASC;
  const rawResponse: AxiosResponse = await api.get(`/${ApiPathParamsEnum.USERS}/${owner}/${ApiPathParamsEnum.REPOS}?sort=${sort}&direction=${direction}`);
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
    displayName: RepoTableColumnDisplayNamesEnum.REPO_NAME,
    clickable: true,
    className: ClassNamesEnum.SORTABLE,
    dataName: RepoTableColumnDataNamesEnum.FULL_NAME
  },
  {
    displayName: RepoTableColumnDisplayNamesEnum.DESCRIPTION,
    clickable: false,
    dataName: RepoTableColumnDataNamesEnum.DESCRIPTION
  },
  {
    displayName: RepoTableColumnDisplayNamesEnum.CREATED_AT,
    clickable: true,
    className: ClassNamesEnum.SORTABLE,
    dataName: RepoTableColumnDataNamesEnum.CREATED_AT
  },
  {
    displayName: RepoTableColumnDisplayNamesEnum.UPDATED_AT,
    clickable: true,
    className: ClassNamesEnum.SORTABLE,
    dataName: RepoTableColumnDataNamesEnum.UPDATED_AT
  },
  {
    displayName: RepoTableColumnDisplayNamesEnum.PUSHED_AT,
    clickable: true,
    className: ClassNamesEnum.SORTABLE,
    dataName: RepoTableColumnDataNamesEnum.PUSHED_AT
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
