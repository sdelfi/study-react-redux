import React, {useState} from "react";

import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    const {searchRepositories} = useActions();
    const {data, error, loading} = useTypedSelector(state => state.repositories);
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        searchRepositories(term);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input onChange={e => setTerm(e.target.value)} value={term}/>
            <button>Search</button>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
        </form>
    </div>
}

export default RepositoriesList;