export interface Repository {
}

export interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}


export const RepositoriesInitialState = {
    loading: false,
    error: null,
    data: []
}