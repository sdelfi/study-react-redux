import {
    SearchRepositoriesSuccessAction, SearchRepositoriesAction, SearchRepositoriesErrorAction
} from '../actions/RepositoriesActions';
import {AnyAction, createReducer} from '@reduxjs/toolkit';
import {RepositoriesState} from "../types/RepositoriesState";
import {ActionType} from "../action-types/RepositoriesActionTypes";
import {Action} from "../actions/RepositoriesActions";


// interface Action extends AnyAction {
//     type: string;
//     payload?: any
// }

// type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

// const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
const RepositoriesReducer = (state: RepositoriesState, action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: null, data: []}
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading: false, error: null, data: action.payload}
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading: false, error: action.payload, data: []}
        default:
            return state;
    }
}
//
// const RepositoriesReducer = createReducer({}, (builder) =>
//     builder
//         .addCase(searchRepositoriesAction, (state): RepositoriesState => {
//             return {...state, loading: true, error: null, data: []};
//         })
//         .addCase(searchRepositoriesSuccessAction, (state, action) => {
//             return {...state, loading: false, error: null, data: action.payload};
//         })
//         .addCase(searchRepositoriesErrorAction, (state, action): RepositoriesState => {
//             return {...state, loading: false, error: action.payload, data: []};
//         })
// );

export default RepositoriesReducer;
