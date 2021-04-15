import {createAction} from "@reduxjs/toolkit";
import {ActionType} from "../action-types/RepositoriesActionTypes";

// export const SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES';
// export const SEARCH_REPOSITORIES_SUCCESS = 'SEARCH_REPOSITORIES_SUCCESS';
// export const SEARCH_REPOSITORIES_ERROR = 'SEARCH_REPOSITORIES_ERROR';

// export const searchRepositoriesAction = createAction<string, 'SEARCH_REPOSITORIES'>('SEARCH_REPOSITORIES');
// export const searchRepositoriesSuccessAction = createAction<string, 'SEARCH_REPOSITORIES_SUCCESS'>('SEARCH_REPOSITORIES_SUCCESS');
// export const searchRepositoriesErrorAction = createAction<string, 'SEARCH_REPOSITORIES_ERROR'>('SEARCH_REPOSITORIES_ERROR');


export interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

export interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesErrorAction
    | SearchRepositoriesSuccessAction;
