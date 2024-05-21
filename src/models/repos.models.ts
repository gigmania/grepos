export interface HeaderOptions {
  displayName: string;
  clickable?: boolean;
  clickHandler?: Function;
  className?: string;
  dataName?: string;
  id: number
}

export interface Repo {
  owner: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
}

export interface RepoRequestParams {
  owner: string;
  perPage?: number;
  page?: number;
  sort?: string;
  direction?: string;
}

export interface RepoApiResponse {
  layoutType: string;
  repos: Repo[];
  headerOptions: HeaderOptions[];
}

export enum RepoTableColumnDisplayNames {
  REPO_NAME = 'Repo Name',
  DESCRIPTION = 'Description',
  CREATED_AT = 'Created At',
  UPDATED_AT = 'Updated At',
  PUSHED_AT = 'Pushed At'
}

export enum RepoTableColumnDataNames {
  FULL_NAME = 'full_name',
  DESCRIPTION = 'description',
  CREATED_AT = 'created',
  UPDATED_AT = 'updated',
  PUSHED_AT = 'pushed'
}

export enum ClassNames {
  SORTABLE = 'sortable'
}

export enum DataLayoutEnum {
  TABLE = 'table'
}

export enum SortDirections {
  ASC = 'asc',
  DESC = 'desc'
}
