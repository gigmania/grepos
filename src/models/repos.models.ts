export interface HeaderOptions {
  displayName: string;
  clickable?: boolean;
  clickHandler?: Function;
  className?: string;
  dataName?: string;
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
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
  PUSHED_AT = 'pushed_at'
}

export enum ClassNames {
  SORTABLE = 'sortable'
}

export interface Repo {
  owner: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
}

export interface RepoApiResponse {
  layoutType: string;
  repos: Repo[];
  headerOptions: HeaderOptions[];
}

export enum DataLayoutEnum {
  TABLE = 'table'
}