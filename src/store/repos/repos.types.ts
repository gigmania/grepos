export type IReposState = {
  repos: any[];
  isLoading: boolean;
  errors: Error | null;
  owner: string;
}

export const REPOS = 'repos';
export const REPOS_FETCH_START = `${REPOS}/getRepos`
