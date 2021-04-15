import {combineReducers} from "redux";
import RepositoriesReducer from "./RepositoriesReducer";


const reducers = combineReducers({
    repositories: RepositoriesReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>