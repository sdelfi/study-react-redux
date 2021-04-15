import React, {useState} from "react";
// import {useDispatch} from "react-redux";
// import {useSelector} from "react-redux";
// import {RootState} from "../state";
// import {actionCreators} from '../state'

import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    // const dispatch = useDispatch();
    const {searchRepositories} = useActions();
    // const {data, error, loading} = useSelector(((state: RootState) => state.repositories))
    const {data, error, loading} = useTypedSelector(state => state.repositories);
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        // dispatch(actionCreators.searchRepositories(term))
        searchRepositories(term);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input onChange={e => setTerm(e.target.value)} value={term}/>
            <button>Search</button>
        </form>
    </div>
}

export default RepositoriesList;